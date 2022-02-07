#!/bin/sh -x

apt-get autoremove -y

rm -rf /tmp/* /var/tmp/*

apt-get clean
rm -rf /var/lib/apt/lists/*
