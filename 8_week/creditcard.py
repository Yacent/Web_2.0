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


class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        '''fuck'''
        self.render('buyagrade.html')

class SuckerHandler(tornado.web.RequestHandler):
    def post(self):
        '''hey'''
        __username = self.get_argument('username', '')
        __section = self.get_argument('section', '')
        __card_num = self.get_argument('card_num', '')
        __card_type = self.get_argument('card_type', '')

        if not self.__is_fill__(__username, __section, __card_num, __card_type):
            self.render('error.html',\
                str_content="You didn't fill out the form completely.")
        elif not self.__is_valid__(__card_num, __card_type):
            self.render('error.html',\
                str_content="You didn't provide a valid card number.")
        else:
            __list_data = []
            with open(os.path.join(os.path.dirname(__file__), 'suckers.txt'), \
            'a') as regis_data:
                regis_data.writelines((__username+';'+__section+';'+\
                	__card_num+';'+__card_type+'\n'))
            with open(os.path.join(os.path.dirname(__file__), 'suckers.txt')) \
            as read_data:
                __list_data = \
                [line.rstrip('\r\n') for line in read_data.readlines()]
            self.render('sucker.html',\
                list_data=__list_data,\
                username=__username,\
                section=__section,\
                card_num=__card_num,\
                card_type=__card_type\
                )

    def __is_fill__(self, __username, __section, __card_num, __card_type):
        '''man'''
        if __username != '' and __section != '' and __card_num != '' \
        and __card_type != '':
            return True
        else:
            return False

    def __is_valid__(self, __card_num, __card_type):
        '''you are good'''
        visa_style = r'^4\d{3}-?\d{4}-?\d{4}-?\d{4}$'
        master_style = r'^5\d{3}-?\d{4}-?\d{4}-?\d{4}$'

        if __card_type == 'Visa':
            res = re.match(visa_style, __card_num)
        else:
            res = re.match(master_style, __card_num)

        if not res:
            return False
        else:
            card_num_str = res.group(0).replace('-', '')
            if self.__luhn__(card_num_str):
                return True
            else:
                return False

    def __luhn__(self, card_num_str):
        '''cai guai lie'''
        index = len(card_num_str)-1
        sum = 0
        while index >= 0:
            if index%2 != 0:
                sum += int(card_num_str[index])
            else:
                tmp_double = int(card_num_str[index])*2
                if tmp_double < 10:
                    sum += tmp_double
                else:
                    ten_digit = 1
                    single_digit = tmp_double%10
                    sum += ten_digit + single_digit
            index -= 1

        if sum%10 == 0:
            return True
        else:
            return False

if __name__ == '__main__':
    tornado.options.parse_command_line()
    APP = tornado.web.Application(\
		handlers=[(r'/', IndexHandler), (r'/sucker', SuckerHandler)],\
		template_path=os.path.join(os.path.dirname(__file__), "templates"),\
		static_path=os.path.join(os.path.dirname(__file__), "static"),\
		debug=True,\
		autoescape=None\
		)
    HTTP_SERVER = tornado.httpserver.HTTPServer(APP)
    HTTP_SERVER.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
