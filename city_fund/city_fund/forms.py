from django import forms

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset, Button

from signup.models import SignUp


class SignUpForm(forms.Form):
    def __init__(self, *args, **kwargs):
	super(SignUpForm, self).__init__(*args, **kwargs)
	self.helper = FormHelper(self)
	self.helper.form_class = "form-inline signup-form"
	self.helper.form_method = "post"
	self.helper.layout = Layout(
	    Fieldset("", "name", "email"),
	    Button("submit", "Sign Up", css_class="btn-default pink")
	    )


    name = forms.CharField(
	label="Name",
	widget=forms.TextInput(attrs={'placeholder': 'your name'}),
	max_length=100,
	required=False,
    )

    email = forms.EmailField(
	label="Email",
	widget=forms.TextInput(attrs={'placeholder': 'your email'}),
    )
