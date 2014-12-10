from django.db import models

# Create your models here.


class SignUp(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100, null=False, blank=False)
    message = models.TextField(max_length=1000, null=True, blank=True)

    def __unicode__(self):
        return self.email