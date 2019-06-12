from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator

class Franquia(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=1000)
    slogan = models.CharField(max_length=500)
    data_fundacao = models.CharField(max_length=500)
    site = models.URLField(max_length=500)

class Loja(models.Model):
    franquia_id = models.ForeignKey(Franquia)
    numero = models.CharField(max_length=20)
    endereco = models.CharField(max_length=1000)
    data_abertura = models.DateTimeField(default=timezone.now)

    # Business hours in a 24 hour clock.  Default 8am-5pm.
    horario_comercial_inicio = models.IntegerField(
        default=8,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(23)
        ]
    )
    horario_comercial_fim = models.IntegerField(
        default=17,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(23)
        ]
    )

class Empregado(models.Model):
    loja_id = models.ForeignKey(Loja)
    numero_telefone = models.CharField(max_length=20)
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    data_contrato = models.DateTimeField(default=timezone.now)

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    admin = models.CharField(max_length=1,default=0)