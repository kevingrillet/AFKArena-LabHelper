# AFKArena-LabHelper

Little helper because I'm writing with short names instead of full names everytime and I'm bored to try to replace it by hand :smile:

```console
$ ./labHelper.sh -h

 _       ___  ______   _   _      _
| |     / _ \ | ___ \ | | | |    | |
| |    / /_\ \| |_/ / | |_| | ___| |_ __   ___ _ __ 
| |    |  _  || ___ \ |  _  |/ _ \ | '_ \ / _ \ '__|
| |____| | | || |_/ / | | | |  __/ | |_) |  __/ |   
\_____/\_| |_/\____/  \_| |_/\___|_| .__/ \___|_|   
                                   | |
                                   |_|

USAGE: labHelper.sh [OPTIONS]

DESCRIPTION
   Replace text with readable content:

   - Bo > Boss
   - Br > Brown flag
   - Fo > Fountain
   - He > Heroes
   - Red > Red flag
   - Roa > Roamer
   - Wa > Wagon
   - Wr > Wrizz

OPTIONS
   -h
      Show help

   -i <INPUT_FILE>
      Parse the file


$ cat lab.in
** Floor I **
Br, Wa
Br, Wa, Red
Red, Wa
Br, Red, Br
Br, Fo
Br, Br, Red
Fo, Red
Br, Wa, Red
Fo, He
Bo

** Floor II **
Red, Fo
Red, Red, Br
Fo, Wa
Br, Wa, Roa
Br, Red
Fo, Red, Br
Br, Red
Br, Red, Wa
He, Fo
Bo

** Floor - Hard Mode **
Fo, He
Wa, Red, Red
Fo, Roa
Br, Br, Red
Red, Red
Red, Red, Red
Wr, Red
Red, Red, Red
He, Fo
Bo


$ ./labHelper.sh -i lab.in
** Floor I **
Brown flag, Wagon
Brown flag, Wagon, Red flag
Red flag, Wagon
Brown flag, Red flag, Brown flag
Brown flag, Fountain
Brown flag, Brown flag, Red flag
Fountain, Red flag
Brown flag, Wagon, Red flag
Fountain, Heroes
Boss

** Floor II **
Red flag, Fountain
Red flag, Red flag, Brown flag
Fountain, Wagon
Brown flag, Wagon, Roamer
Brown flag, Red flag
Fountain, Red flag, Brown flag
Brown flag, Red flag
Brown flag, Red flag, Wagon
Heroes, Fountain
Boss

** Floor - Hard Mode **
Fountain, Heroes
Wagon, Red flag, Red flag
Fountain, Roamer
Brown flag, Brown flag, Red flag
Red flag, Red flag
Red flag, Red flag, Red flag
Wrizz, Red flag
Red flag, Red flag, Red flag
Heroes, Fountain
Boss

```
