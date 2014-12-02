'''#!usr/bin/env python
# -*- coding: utf-8 -*-
'''

import os.path
import re

import tornado.options
import tornado.web
import tornado.httpserver
import tornado.ioloop

from tornado.options import define, options
define("port", default=8888, help="run on the given port", type=int)

IMGDIR = os.path.join(os.path.dirname(__file__), 'statics', 'images')
ALLIMG = os.listdir(IMGDIR)
IMG_USER = [x for x in ALLIMG if x.find('.jpg') >= 0]


class IndexHandler(tornado.web.RequestHandler):
    '''indexhandler'''
    def get(self):
        '''fuck'''
        self.render('index.html')

class Person(object):
    '''class for person'''
    def __init__(self, name, gender, age, ptype, system, sex, low_age, high_age):
        '''default method'''
        self.__name = name
        self.__gender = gender
        self.__age = age
        self.__ptype = ptype
        self.__system = system
        self.__low_age = low_age
        self.__high_age = high_age
        self.__rating = 0
        self.__image = None
        self.__list_img = IMG_USER
        if len(sex) == 2:
            self.__sex = sex[0]+sex[1]
        else:
            self.__sex = sex[0]

    @property
    def name(self):
        '''name'''
        return self.__name

    @property
    def gender(self):
        '''gender'''
        return self.__gender

    @property
    def age(self):
        '''age'''
        return self.__age

    @property
    def ptype(self):
        '''ptype'''
        return self.__ptype


    @property
    def system(self):
        '''system'''
        return self.__system

    @property
    def sex(self):
        '''sex'''
        return self.__sex

    @property
    def low_age(self):
        '''begin'''
        return self.__low_age

    @property
    def high_age(self):
        '''end'''
        return self.__high_age

    @property
    def rating(self):
        '''defalut rating'''
        return self.__rating

    def set_rating(self, rating):
        '''rating'''
        self.__rating = rating

    @property
    def image(self):
        '''data image'''
        self.__image = self.__name.lower().replace(' ', '_')+'.jpg'
        if self.__image in self.__list_img:
            return self.__image
        else:
            self.__image = 'default_user.jpg'
            return self.__image

    def set_image(self, image):
        '''to set a new image'''
        self.__image = image


    def match_degree(self, lover):
        '''get rating'''
        if self.sex.find(lover.gender) != -1 and lover.sex.find(self.gender) != -1:
            rating = 0
            if lover.age <= self.__high_age and lover.age >= self.__low_age and \
            self.age <= lover.__high_age and self.age >= lover.__low_age:
                rating += 1
            if lover.system == self.system:
                rating += 2
            for i in lover.ptype:
                if self.ptype.find(i) != -1:
                    rating += 1
            return rating
        else:
            return False

    @staticmethod
    def is_sign_up(name):
        '''your name has been used or not'''
        with open(os.path.join(os.path.dirname(__file__), 'singles.txt')) as read_name:
            for lines in read_name.readlines():
                lines = lines.strip().split(',')
                if lines[0] == name:
                    return False
        return True


    @staticmethod
    def is_empty(name, gender, age, ptype, system, sex, low_age, high_age):
        '''is_empty or not?'''
        if not name or not gender or not age or not ptype or not system or \
        len(sex) == 0 or not low_age or not high_age:
            return False
        else:
            return True

    @staticmethod
    def is_valid(age, low_age, high_age, ptype):
        '''valid number'''
        if Person.isvalid_num(age) and Person.isvalid_num(low_age) and \
        Person.isvalid_num(high_age) and Person.isvalid_type(ptype) and \
        int(low_age) <= int(high_age):
            return True
        else:
            return False

    @staticmethod
    def isvalid_num(value):
        '''the first to tell whether it is a digit number'''
        if value.isdigit() and int(value) >= 0 and int(value) <= 99:
            return True
        else:
            return False

    @staticmethod
    def isvalid_type(ptype):
        '''to tell whether it is valid'''
        res = r'^[IE][NS][FT][JP]$'
        if not re.match(res, ptype):
            return False
        else:
            return True

    @staticmethod
    def get_user_message(per):
        '''to get the query list'''
        per_list = []
        with open(os.path.join(os.path.dirname(__file__), 'singles.txt')) as singles:
            for line in singles.readlines():
                line = line.strip().split(',')
                if line[0] == per.name:
                    continue
                person = Person(line[0], line[1], int(line[2]), line[3], line[4], \
                	line[5], int(line[6]), int(line[7]))
                if per.match_degree(person) >= 3:
                    person.set_rating(per.match_degree(person))
                    per_list.append(person)
            return per_list

class ResultHandler(tornado.web.RequestHandler):
    '''fuck'''
    def get(self):
        old_name = self.get_argument('old_name', None)
        if Person.is_sign_up(old_name):
            self.render('sorry.html', detail='Sorry, Please register!')
        else:
            former_user = []
            with open(os.path.join(os.path.dirname(__file__), 'singles.txt')) as singles:
                for line in singles.readlines():
                    line = line.strip().split(',')
                    if line[0] == old_name:
                        former_user = line
                        break
            person = Person(former_user[0], former_user[1], \
            	int(former_user[2]), former_user[3], former_user[4], \
            	former_user[5], int(former_user[6]), int(former_user[7]))
            self.render('results.html', persons=Person.get_user_message(person))

    def post(self):
        name = self.get_argument('name', None)
        gender = self.get_argument('gender', None)
        age = self.get_argument('age', None)
        ptype = self.get_argument('ptype', None)
        system = self.get_argument('system', None)
        sex = self.get_arguments('sex', None)
        low_age = self.get_argument('low_age', None)
        high_age = self.get_argument('high_age', None)
        image = self.request.files['image']
        if not Person.is_sign_up(name):
            self.render('sorry.html', detail='Sorry, your name has been used')
        elif not Person.is_empty(name, gender, age, ptype, system, sex, low_age, high_age):
            self.render('sorry.html',\
            	detail='Something you do not fill out.You fool')
        elif not Person.is_valid(age, low_age, high_age, ptype):
            self.render('sorry.html', detail='Invalid value, please check.')
        else:
            person = Person(name, gender, int(age), ptype, system, sex, \
				int(low_age), int(high_age))
            for meta in image:
                f_path = os.path.join(os.path.dirname(__file__), 'statics/images/'+\
                	person.name.lower().replace(' ', '_')+'.jpg')
                img = open(f_path, 'wb')
                img.write(meta['body'])
                img.close()
                person.set_image(f_path)
            with open(os.path.join(os.path.dirname(__file__), 'singles.txt'), \
				'a') as singles:
                singles.writelines((person.name+','+person.gender+','+\
                	str(person.age)+','+person.ptype+','+person.system+\
                	','+person.sex+','+str(person.low_age)+\
					','+str(person.high_age)+'\n'))
            self.render('results.html',\
				persons=Person.get_user_message(person))

if __name__ == '__main__':
    tornado.options.parse_command_line()
    APP = tornado.web.Application(\
		handlers=[(r'/', IndexHandler), (r'/signin', ResultHandler), \
		(r'/query', ResultHandler)],\
		template_path=os.path.join(os.path.dirname(__file__), "templates"),\
		static_path=os.path.join(os.path.dirname(__file__), "statics"),\
		debug=True\
		)
    HTTP_SERVER = tornado.httpserver.HTTPServer(APP)
    HTTP_SERVER.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
    