# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('franquia', '0007_auto_20190612_1305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='admin',
            field=models.CharField(max_length=1),
        ),
    ]
