from django.shortcuts import render_to_response, render, RequestContext
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.core.context_processors import csrf
from django.contrib import messages
from django.db import IntegrityError

from .forms import SignUpForm
from signup.models import SignUp


def home(request):

    if request.POST:
        form = SignUpForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            new_signup = SignUp(name=name, email=email)
	    try:
                new_signup.save()
                messages.success(request, "Thanks for signing up")
	    except IntegrityError:
		messages.error(request, "That email is already in use")
            return render_to_response("signup.html", locals(), context_instance=RequestContext(request))
        else:
            messages.error(request, "Looks like there was an error")
            return render_to_response("invalid_form.html", locals(), context_instance=RequestContext(request))
    else:
        form = SignUpForm()

    template = {}
    template.update(csrf(request))
    template["form"] = form

    return render_to_response("signup.html", template)
