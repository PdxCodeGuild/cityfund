# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0002_auto_20141213_0258'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='signup',
            name='message',
        ),
    ]
