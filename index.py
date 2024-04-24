import pygame
import sys

# Inicialização do Pygame
pygame.init()

# Configurações do jogo
largura_tela = 800
altura_tela = 600
cor_fundo = (0, 0, 0)  # Cor preta

# Configurações da bola
tamanho_bola = 20
cor_bola = (255, 255, 255)  # Cor branca
posicao_bola = [largura_tela // 2, altura_tela // 2]
velocidade_bola = [5, 5]

# Configurações da raquete
largura_raquete = 15
altura_raquete = 100
cor_raquete = (255, 255, 255)  # Cor branca
posicao_raquete_esquerda = [0, altura_tela // 2 - altura_raquete // 2]
posicao_raquete_direita = [largura_tela - largura_raquete, altura_tela // 2 - altura_raquete // 2]
velocidade_raquete = 10

# Configurações do relógio
clock = pygame.time.Clock()

# Configuração da janela do jogo
tela = pygame.display.set_mode((largura_tela, altura_tela))
pygame.display.set_caption("Pong Game")

# Loop principal do jogo
while True:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Atualização da posição da bola
    posicao_bola[0] += velocidade_bola[0]
    posicao_bola[1] += velocidade_bola[1]

    # Colisões com as bordas da tela
    if posicao_bola[1] <= 0 or posicao_bola[1] >= altura_tela - tamanho_bola:
        velocidade_bola[1] = -velocidade_bola[1]

    # Colisões com as raquetes
    if (posicao_bola[0] <= posicao_raquete_esquerda[0] + largura_raquete and
            posicao_raquete_esquerda[1] <= posicao_bola[1] <= posicao_raquete_esquerda[1] + altura_raquete):
        velocidade_bola[0] = -velocidade_bola[0]

    if (posicao_bola[0] >= posicao_raquete_direita[0] - tamanho_bola and
            posicao_raquete_direita[1] <= posicao_bola[1] <= posicao_raquete_direita[1] + altura_raquete):
        velocidade_bola[0] = -velocidade_bola[0]

    # Movimentação das raquetes
    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_UP] and posicao_raquete_direita[1] > 0:
        posicao_raquete_direita[1] -= velocidade_raquete
    if teclas[pygame.K_DOWN] and posicao_raquete_direita[1] < altura_tela - altura_raquete:
        posicao_raquete_direita[1] += velocidade_raquete

    # Limpeza da tela
    tela.fill(cor_fundo)

    # Desenho da bola e das raquetes
    pygame.draw.circle(tela, cor_bola, (int(posicao_bola[0]), int(posicao_bola[1])), tamanho_bola)
    pygame.draw.rect(tela, cor_raquete, (posicao_raquete_esquerda[0], posicao_raquete_esquerda[1], largura_raquete, altura_raquete))
    pygame.draw.rect(tela, cor_raquete, (posicao_raquete_direita[0], posicao_raquete_direita[1], largura_raquete, altura_raquete))

    # Atualização da tela
    pygame.display.flip()

    # Controle de frames por segundo
    clock.tick(60)