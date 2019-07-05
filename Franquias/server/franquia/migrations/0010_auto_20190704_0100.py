# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('franquia', '0009_auto_20190612_1313'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assoc_Usuarios_Franquias',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')),
                ('franquia_id', models.ForeignKey(to='franquia.Franquia')),
            ],
        ),
        migrations.AddField(
            model_name='usuario',
            name='franquia_id',
            field=models.ForeignKey(default=1, to='franquia.Franquia'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='assoc_usuarios_franquias',
            name='usuario_id',
            field=models.ForeignKey(to='franquia.Usuario'),
        ),
    ]
