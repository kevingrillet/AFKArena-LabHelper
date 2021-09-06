#!/bin/bash
# ##############################################################################
# Script Name   : labHelper.sh
# Description   : Used to run afk-daily on phone
# Args          : -i <INPUT_FILE>
# Output        : Readable lab path
# Author        : Kevin GRILLET
# GitHub        : https://github.com/kevingrillet/AFKArena-LabHelper
# License       : GNU GPL-3
# ##############################################################################

# Colors
cNc="\033[0m"        # Text Reset
cGreen="\033[0;92m"  # Green
cYellow="\033[0;93m" # Yellow
cCyan="\033[0;96m"   # Cyan
cWhite="\033[0;97m"  # White

# ##############################################################################
# Function Name : show_help
# ##############################################################################
run() {
    sed "s/Bo/Boss/g; s/Br/Brown flag/g; s/Fo/Fountain/g; s/He/Heroes/g; s/Red/Red flag/g; s/Roa/Roamer/g; s/Wa/Wagon/g; s/Wr/Wrizz/g" "$1" >lab.out
    cat lab.out
}

# ##############################################################################
# Function Name : show_help
# ##############################################################################
show_help() {
    echo -e "${cWhite}"
    echo -e " _       ___  ______   _   _      _                 "
    echo -e "| |     / _ \ | ___ \ | | | |    | |                "
    echo -e "| |    / /_\ \| |_/ / | |_| | ___| |_ __   ___ _ __ "
    echo -e "| |    |  _  || ___ \ |  _  |/ _ \ | '_ \ / _ \ '__|"
    echo -e "| |____| | | || |_/ / | | | |  __/ | |_) |  __/ |   "
    echo -e "\_____/\_| |_/\____/  \_| |_/\___|_| .__/ \___|_|   "
    echo -e "                                   | |              "
    echo -e "                                   |_|              "
    echo -e
    echo -e "USAGE: ${cYellow}labHelper.sh${cWhite} ${cCyan}[OPTIONS]${cWhite}"
    echo -e
    echo -e "DESCRIPTION"
    echo -e "   Replace text with readable content:"
    echo -e
    echo -e "   - Bo > Boss"
    echo -e "   - Br > Brown flag"
    echo -e "   - Fo > Fountain"
    echo -e "   - He > Heroes"
    echo -e "   - Red > Red flag"
    echo -e "   - Roa > Roamer"
    echo -e "   - Wa > Wagon"
    echo -e "   - Wr > Wrizz"
    echo -e
    echo -e "OPTIONS"
    echo -e "   ${cCyan}-h${cWhite}"
    echo -e "      Show help"
    echo -e
    echo -e "   ${cCyan}-i${cWhite} ${cGreen}<INPUT_FILE>${cWhite}"
    echo -e "      Parse the file${cNc}"
}

while getopts "hi:" option; do
    case $option in
    h)
        show_help
        exit 0
        ;;
    i)
        run $OPTARG
        ;;
    :)
        printWarn "Argument required by this option: $OPTARG"
        exit 1
        ;;
    \?)
        printError "$OPTARG : Invalid option"
        exit 1
        ;;
    esac
done
