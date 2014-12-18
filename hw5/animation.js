
// CSE 190 M, Spring 2009, Marty Stepp
// Homework 5: ASCIImation
// This file contains the ASCII animations as large strings.
// 
// You can refer to them by variable names such as blank or dive, or by indexes
// into an array ANIMATIONS, such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"].
// 
// The former is probably more intuitive for new programmers, but the latter
// may allow you to write more elegant code by indexing using the text of the
// menu option selected in the XHTML.  (See bottom of file.)
//
// (Hint: The array index you want is the same as the select box's
// selected value...)

var blank = "";

var exercise = "  o\n" + 
    " /#\\\n" + 
    " _|_\n" + 
    "=====\n" + 
    " \\o/\n" + 
    "  #\n" + 
    "_/ \\_\n";

var juggler = "   o\n" + 
    "   O\n" + 
    " o/|\\o\n" + 
    "  / \\\n" + 
    "=====\n" + 
    "    o\n" + 
    " o_O\n" + 
    "   |o\n" + 
    "  / \\\n" + 
    "=====\n" + 
    " o   o\n" + 
    "  \\O\n" + 
    "   o\\\n" + 
    "  / \\\n" + 
    "=====\n" + 
    "  o\n" + 
    "  _O_o\n" + 
    "  o|\n" + 
    "  / \\\n";

var bike = "\n" + 
    "   _o\n" + 
    " _< \\\\_\n" + 
    "(_)>(_)            .\n" + 
    "=====\n" + 
    "\n" + 
    "     _o\n" + 
    "   _< \\\\_\n" + 
    "  (_)>(_)          .\n" + 
    "=====\n" + 
    "\n" + 
    "       _o\n" + 
    "     _< \\\\_\n" + 
    "    (_)>(_)        .\n" + 
    "=====\n" + 
    "          o\n" + 
    "         /\\\\_\n" + 
    "       _< (_)\n" + 
    "      (_)          .\n" + 
    "=====\n" + 
    "            o\n" + 
    "           /\\\\_\n" + 
    "         _< (_)\n" + 
    "        (_)        .\n" + 
    "=====\n" + 
    "             _\n" + 
    "           _ \\\\\\\\o\n" + 
    "          (_)/<_\n" + 
    "              (_)  .\n" + 
    "\n" + 
    "=====\n" + 
    "               _\n" + 
    "             _ \\\\\\\\o\n" + 
    "            (_)/<_\n" + 
    "                (_).\n" + 
    "=====\n" + 
    "                  _\n" + 
    "                 (_)\\\\__/o\n" + 
    "                   \\\\_| \\\\\n" + 
    "                  .(_)\n" + 
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\' \\\\/\n" + 
    "                  .  (_)\'  _\\\\o_\n" +
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'  \\\\/\n" + 
    "                  .  (_)\'   _\\\\o_\n" +
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'   \\\\/\n" + 
    "                  .  (_)\'    _\\\\o_\n" +
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'    \\\\/\n" + 
    "                  .  (_)\'     _\\\\o_\n" + 
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'    \\\\/\n" + 
    "                  .  (_)\'     _\\\\_o\n" + 
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'    \\\\/\n" + 
    "                  .  (_)\'     _\\\\__o\n" + 
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'    \\\\/\n" + 
    "                  .  (_)\'     _\\\\__ o\n" + 
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'    \\\\/\n" + 
    "                  .  (_)\'     _\\\\__  o\n" + 
    "=====\n" + 
    "                       _\n" + 
    "                      (_)\n" + 
    "                      _|/\'    \\\\/\n" + 
    "                  .  (_)\'     _\\\\__   o\n";

var dive = "  o\n" + 
    " /|\\\n" + 
    ",/ \\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "..,..,,.,...,,|.,|..,.,,...,..,,,..,..,..,.,\n" + 
    "=====\n" + 
    "     o\n" + 
    "    -|-\n" + 
    "    / \\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" + 
    "=====\n" + 
    "      \\o/\n" + 
    "       |\n" + 
    "      / \\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" + 
    "=====\n" + 
    "        \\o/\n" + 
    "        /\n" + 
    "       / \\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" + 
    "=====\n" + 
    "            |o__\n" + 
    "            /\n" + 
    "          /\\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" + 
    "=====\n" + 
    "              o/__\n" + 
    "           __/\n" + 
    "             \\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" + 
    "=====\n" + 
    "\n" + 
    "                  __ o__\n" + 
    "                 /)  \\\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "...,,,...,.,.,|..|.,.,...,,,.,..,.,.,,,..,..\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "                           \\)\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/    \\\n" + 
    "-|----------|-|--|-|--\'    /o\\\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "....,...,...,,|,,|,.,.,.,.,.,.,.,....,,,,,..\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |           \\|\n" + 
    "              |  |            \\o\n" + 
    "              |  |            ( \\\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,....,,...|.,|.,.,.,.,.,.,.,.,.,.,.,.,,,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |                \\)\n" + 
    "              |  |                |\n" + 
    "              |  |               /o\\\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,,,...,.,,,,,|.,|.,,,.,.,,.,..,.,,....,,,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |                 \\ /\n" + 
    "              |  |                  |\n" + 
    "              |  |                 /o\\\n" + 
    ",..,.,..,,.,.,|,,|.,,,.,,.,,.,...,,..,,.,..,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,\\|.,..,.\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |                `.\' \'.\n" + 
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,`\'.,..,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |           .--.-.--.-.---.--.\n" + 
    "              |  |          (YEA, that was fun!)\n" + 
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |           .--.-.--.-.---.--.\n" + 
    "              |  |          (YEA, that was fun!)\n" + 
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |           .--.-.--.-.---.--.\n" + 
    "              |  |          (YEA, that was fun!)\n" + 
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |           .--.-.--.-.---.--.\n" + 
    "              |  |          (YEA, that was fun!)\n" + 
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" + 
    "=====\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" + 
    "-|----------|-|--|-|--\'\n" + 
    "/            \\ \\/ /\n" + 
    "              )  (\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    "              |  |\n" + 
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n";


var custom = 
    "|                                      " +
    "=====\n" +
    " __                                    " +
    "=====\n" +
    "   |                                   " +
    "=====\n" +
    "    __                                 " +
    "=====\n" +
    "      |                                " +
    "=====\n" +
    "       __                              " +
    "=====\n" +
    "         |                             " +
    "=====\n" +
    "          __                           " +
    "=====\n" +
    "            |                          " +
    "=====\n" +
    "             __                        " +
    "=====\n" +
    "               |                       " +
    "=====\n" +
    "                __                     " +
    "=====\n" +
    "                  |                    " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            " +
    "=====\n" +
    "               任性，不走了            ";

// can also access the animations as an associative array / hash map,
// such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"]
var ANIMATIONS = [];
ANIMATIONS["Blank"] = "";
ANIMATIONS["Exercise"] = exercise;
ANIMATIONS["Juggler"] = juggler;
ANIMATIONS["Bike"] = bike;
ANIMATIONS["Dive"] = dive;
ANIMATIONS["Custom"] = custom;
