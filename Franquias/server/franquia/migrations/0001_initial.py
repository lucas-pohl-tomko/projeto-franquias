# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import django.core.validators


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empregado',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('numero_telefone', models.CharField(max_length=20)),
                ('nome', models.CharField(max_length=100)),
                ('sobrenome', models.CharField(max_length=100)),
                ('data_contrato', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Franquia',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('nome', models.CharField(max_length=100)),
                ('descricao', models.CharField(max_length=1000)),
                ('slogan', models.CharField(max_length=500)),
                ('data_fundacao', models.CharField(max_length=500)),
                ('site', models.URLField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Loja',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('numero', models.CharField(max_length=20)),
                ('endereco', models.CharField(max_length=1000)),
                ('data_abertura', models.DateTimeField(default=django.utils.timezone.now)),
                ('horario_comercial_inicio', models.IntegerField(default=8, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(23)])),
                ('horario_comercial_fim', models.IntegerField(default=17, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(23)])),
                ('franquia_id', models.ForeignKey(to='franquia.Franquia')),
            ],
        ),
        migrations.AddField(
            model_name='empregado',
            name='loja_id',
            field=models.ForeignKey(to='franquia.Loja'),
        ),
    ]
