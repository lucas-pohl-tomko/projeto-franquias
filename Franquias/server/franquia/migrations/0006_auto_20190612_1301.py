# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('franquia', '0005_auto_20190612_1258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='admin',
            field=models.IntegerField(default=0),
        ),
    ]
