# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('franquia', '0002_usuario'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='admin',
            field=models.IntegerField(max_length=1, null=True),
        ),
    ]
