# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('franquia', '0004_auto_20190612_1246'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='admin',
            field=models.IntegerField(max_length=100, default=0),
            preserve_default=False,
        ),
    ]
