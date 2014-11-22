'''#!usr/bin/env python
# -*- coding: utf-8 -*-
'''

import os.path

import tornado.options
import tornado.web
import tornado.httpserver
import tornado.ioloop

from tornado.options import define, options
define("port", default=8888, help="run on the given port", type=int)

PAS = os.path.join(os.path.dirname(__file__), "static", "filmfiles")

class MovieHandler(tornado.web.RequestHandler):
    '''fuck'''
    def get(self):
        __film = self.get_argument('film', 'princessbride')
        __num_of_review = os.path.join(PAS, __film)
        __all_file = os.listdir(__num_of_review)
        __number_review = [x for x in __all_file if x.find('review') >= 0]
        __gen_review = {}
        __number = len(__number_review)
        __review_list = []
        __lnes = []
        with open(os.path.join(PAS, __film, 'info.txt')) as showmovie:
            key = {\
				'name': showmovie.readline().strip(),\
				'year': showmovie.readline().strip(),\
				'score': showmovie.readline().strip(),\
				'comment_count': showmovie.readline().strip()\
			}
        with open(os.path.join(PAS, __film, 'generaloverview.txt')) as __line_of_gen:
            lines = [line.rstrip().split(':') for line in __line_of_gen.readlines()]
            key.update({'gen': lines})
        for comment in __number_review:
            with open(os.path.join(PAS, __film, comment)) as content:
                __review_list.append([z.strip() for z in content.readlines()])
        self.render('skeleton.html',\
            film=__film,\
            number_review=__number_review,\
            gen_review=__gen_review,\
            number=__number,\
            review_list=__review_list,\
            **key\
			)


if __name__ == '__main__':
    tornado.options.parse_command_line()
    APP = tornado.web.Application(\
		handlers=[(r'/', MovieHandler), (r'/skeleton.html', MovieHandler)],\
		template_path=os.path.join(os.path.dirname(__file__), "templates"),\
		static_path=os.path.join(os.path.dirname(__file__), "static"),\
		debug=True,\
        autoescape=None\
		)
    HTTP_SERVER = tornado.httpserver.HTTPServer(APP)
    HTTP_SERVER.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
