#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mvn clean package -f "$DIR" -U -P ui,docker -Dmaven.test.skip=true -Dskip.failsafe.tests=true -Dspotbugs.skip=true -T 1C