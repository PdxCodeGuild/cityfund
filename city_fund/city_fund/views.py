__author__ = 'student'

from django.shortcuts import render_to_response, render
from django.http import HttpResponseRedirect
from django.contrib import auth

from forms import SignUp


def home(request):
    if request.method == 'POST':
        form = SignUp(request.POST)

        if form.is_valid():
            return render_to_response(request, 'signup_thankyou.html')
    else:
        form = SignUp()

    return render_to_response('signup.html', {'form': form})