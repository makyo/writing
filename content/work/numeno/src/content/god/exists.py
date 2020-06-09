import math

from utils import block, clearpage

def perhaps(fragment, shape):
    if shape > 1:
        for i in range(0, shape + 1):
            turn = 360.0 * ((i + 1) / (shape + 1))
            for j in range(0, 100):
                block((fragment + " ") * (8 - shape),
                        0.03,
                      1.2,
                      0.5 - (0.3 + j / 100) * math.cos(math.radians(turn + 5 * j)),
                      0.5 + (0.3 + j / 100) * math.sin(math.radians(turn + 5 * j)),
                      turn + 4 * j)
    block(fragment, 0.06, 1.2, 0.5, 0.5, 0)
    clearpage()

def is_god():
    sentiment = 'god is between me and my heart'.split()
    lines = [
        perhaps(' '.join(sentiment[0:increasingly + 1]), increasingly)
        for increasingly in range(0, len(sentiment))]

