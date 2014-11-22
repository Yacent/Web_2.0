'''#!usr/bin/env python
# -*- coding: utf-8 -*-
'''
import os.path
import random

import tornado.options
import tornado.web
import tornado.httpserver
import tornado.ioloop

from tornado.options import define, options
define("port", default=8888, help="run on the given port", type=int)

#define global variable
SONGSDIR = os.path.join(os.path.dirname(__file__), "static", "songs")
ALLSONGS = os.listdir(SONGSDIR)
SONGS = [x for x in ALLSONGS if x.find(".mp3") >= 0]
PLAYLISTS = [x for x in ALLSONGS if x.find(".m3u") >= 0]

class SongsHandler(tornado.web.RequestHandler):
    '''fuck
    oh yeah it is over
    '''
    def get(self):
        __songs = SONGS
        __playlist = self.get_argument('playlist', 'none')
        __by_size = self.get_argument('by_size', 'off')
        __shuffle = self.get_argument('shuffle', 'off')
        __playlists = PLAYLISTS
        __newlist = []
        __is_click = False
        if __playlist != 'none':
            __playlists = []
            __is_click = True
            with open(os.path.join(SONGSDIR, __playlist)) as showsongs:
                __newlist = showsongs.read().split('\n')
            __songs = [y for y in __newlist if y.find("#") < 0]
        if '' in __songs:
            __songs.remove('')
        if __shuffle == 'on':
            random.shuffle(__songs)
        else:
            __songs.sort()
        if __by_size == 'on':
            def myself_cmp(second, first):
                '''sick

                how to say
                '''
                return cmp(os.path.getsize(os.path.join(SONGSDIR, first)),\
					       os.path.getsize(os.path.join(SONGSDIR, second))\
					   )
            __songs.sort(myself_cmp)
        __memory = [os.path.getsize(os.path.join(SONGSDIR, i)) for i in __songs]
        __item = [os.path.join(SONGSDIR, i) for i in __songs]
        self.render('music.html',\
			songs=__songs,\
			playlists=__playlists,\
			memory=__memory,\
			item=__item,\
			playlist=__playlist,\
			is_click=__is_click,\
			by_size=__by_size,\
			shuffle=__shuffle\
			)

if __name__ == '__main__':
    tornado.options.parse_command_line()
    APP = tornado.web.Application(\
		handlers=[(r'/', SongsHandler), (r'/music.html', SongsHandler)],\
		template_path=os.path.join(os.path.dirname(__file__), "templates"),\
		static_path=os.path.join(os.path.dirname(__file__), "static"),\
		debug=True\
		)
    HTTP_SERVER = tornado.httpserver.HTTPServer(APP)
    HTTP_SERVER.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()

