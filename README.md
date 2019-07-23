# pomotivator
A pomodoro timer coupled with a reward for a bit of motivation.

Pomotivator is my Code Louisville JavaScript/React Project. It is designed to be a productivity tool for minimizing distraction and focusing time and effort to get quality work done and rewarding the user with jokes at the end of each cycle (which currently does not work as I want it to).

How to start the application (pretty much standard):

0. NPM is required
1. Clone the repository into a location of your choosing
2. Run npm start in that location

Introduction

I created the name Pomotivator by conflating the terms 'pomodoro timer' and 'motivator'. The timer is a popular productivity tool generally having the user work for 25 minutes at a time punctuated by five minute break periods. Users endeavor to stay laser-focused for the 25 minutes then can relax guilt-free for five rather than just going haphazardly through their day succumbing to multiple distractions.

This App

The app is comprised of a pomodoro timer, which has adjustable times for both the work and break portions of the timer. The 'classic' times to set it for are 25/5, but being an 80/20 proponent, I prefer 24/6 myself. I let them default to the classic times.

When the break timer commences, three jokes will appear. **This is not yet working, that is, the jokes are fetched when the app starts and after returning from either the How To or About pages, and they remain present all the time, not only when the break period begins and disappearing when it ends, as I want them to (I will get this working later).** These jokes are the 'motivator' part of the app, kind of a reward for user's 25 minutes of focus.

The first of the jokes is from a Chuck Norris API, the second and third are from another API with two endpoints, one of which is a programming joke, the other a miscellaneous one. 

**BEWARE - some of these jokes are quite raunchy.**

There is a limit to how many responses can be done in a minute, so don't click the nav links back and forth or refresh the browser too much or the jokes will stop for a while. Of course, being a React app, refreshing the browser doesn't really need to be be done anyway. Plus, in practice I think one reward set per pomodoro cycle is enough. These APIs don't have too much in them.

After the break, the timer is reset, and the new work period starts (I don't like the idea of 'work' so I call it 'create').

The timer also has a couple of buttons to 1) start/stop, and 2) pause/resume the timer. **Currently, they both start and stop only, the pause/resume is not yet working.**

The navbar routes go to 'How To' and 'About' pages as well as to 'The App'.