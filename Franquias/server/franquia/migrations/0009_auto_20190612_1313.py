# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('franquia', '0008_auto_20190612_1308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='admin',
            field=models.CharField(max_length=1, default=0),
        ),
    ]
