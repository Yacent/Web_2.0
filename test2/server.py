# -*- coding: utf-8 -*-

import os.path
import re

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class User(object):
	def __init__(self, name, password):
		self.__username = name
		self.__password = password

	@staticmethod
	def get_users():
		with open(os.path.join(os.path.dirname(__file__), 'users.txt')) as users:
			return [line.strip() for line in users.readlines()]

	@staticmethod
	def is_blank(name, password):
		if not name or not password:
			return False
		else:
			return True

	@staticmethod
	def is_valid(name, password):
		res_name = r'[a-zA-Z0-9]{6,12}'
		res_password = r'^[A-Z][a-zA-Z0-9]{5,11}$'
		if not re.match(res_name, name) or re.match(res_password, password):
			return False
		else:
			return True

	@staticmethod
	def add_user(user):
		with open(os.path.join(os.path.dirname(__file__), 'users.txt'), 'a') as users:
			users.writelines((user, '\n'))

	@staticmethod
	def get_question():
		with open(os.path.join(os.path.dirname(__file__), 'questionData.txt')) as question:
			return [line.strip().split(';') for line in question.readlines()]

	@staticmethod
	def get_reply():
		with open(os.path.join(os.path.dirname(__file__), 'replyData.txt')) as reply:
			return [line.strip().split(';') for line in reply.readlines()]

	@staticmethod
	def add_question(title, time, content, name):
		with open(os.path.join(os.path.dirname(__file__), 'questionData.txt'), 'a') as question:
			question.writelines((title.encode('utf-8')+';'+str(time)+';'+name+';'+content.encode('utf-8')+'\n'))

class BaseHandler(tornado.web.RequestHandler):
	def get_current_user(self):
		return self.get_secure_cookie('username')

class IndexHandler(BaseHandler):
	@tornado.web.authenticated
	def get(self):
		questions = User.get_question()
		replies = User.get_reply()
		self.render('index.html', questions=questions, replies=replies)

class LoginHandler(BaseHandler):
	def get(self):
		self.render('login_signup.html', status='登陆')
	def post(self):
		username = self.get_argument('name', None)
		password = self.get_argument('password', None)
		if not User.is_blank(username, password):
			self.render('sorry.html', detail='sorry, Please check out your name and password')
		else:
			user_list = User.get_users()
			user = ','.join([username, password])
			if user in user_list:
				self.set_secure_cookie('username', username)
				self.redirect('/')


class SignupHandler(BaseHandler):
	def get(self):
		self.render('login_signup.html', status='注册')
	def post(self):
		username = self.get_argument('name', None)
		password = self.get_argument('password', None)
		if User.is_valid(username, password):
			self.render('sorry.html', detail='Please input a valid value')
		else:
			user = ','.join([username, password])
			print user
			User.add_user(user)
			user_list = User.get_users()
			if user in user_list:
				self.set_secure_cookie('username', username)
				self.redirect('/')

class LogoutHandler(BaseHandler):
	def get(self):
		self.clear_cookie('username')
		self.redirect('/login')

class QuestionHandler(BaseHandler):
	def get(self):
		self.render('question.html')
	def post(self):
		title = self.get_argument('title', None)
		time = self.get_argument('time', None)
		content = self.get_argument('content', None)
		if title and time and content:
			User.add_question(title, time, content, self.get_current_user())
			self.redirect('/')
		else:
			self.redirect('/question')

class ErrorHandler(BaseHandler):
	def get(self):
		self.render('sorry.html', detail='404 not Found')


if __name__ == "__main__":
    tornado.options.parse_command_line()
    APP = tornado.web.Application(\
    	handlers=[(r'/', IndexHandler), (r'/login', LoginHandler), (r'/signup', SignupHandler),(r'/logout', LogoutHandler),(r'/question', QuestionHandler),(r'/\S+', ErrorHandler)], \
    	template_path=os.path.join(os.path.dirname(__file__), "template"),\
    	static_path=os.path.join(os.path.dirname(__file__), "static"),\
    	cookie_secret="61oETzKXQAGaYdkL5gEmGeJJFuYh7EQnp2XdTP1o/Vo=", \
    	sxrf_cookies=True,\
    	login_url='/login',\
    	debug=True\
    	)
    HTTP_SERVER = tornado.httpserver.HTTPServer(APP)
    HTTP_SERVER.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()