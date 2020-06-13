import math
import random
import sys

from utils import block, clearpage


class cell:
    def __init__(self, text, sides=3, iter=3, max=20, delay=0, jitter=0.0):
        self.text = text
        self.words = text.split()
        self.sides = sides
        self.iter = iter
        self.max = max
        self.delay = delay
        self.jitter = jitter
        self.step_jitters = [0 for _ in range(0, self.sides)]
        self.step = 0 - self.delay
        self.countdown = self.iter

    def next(self):
        if self.delay > 0:
            self.delay -= 1
            self.step += 1
            print('%s delaying...' % self.text, file=sys.stderr)
            return True
        if self.step >= self.max:
            self.countdown -= 1
        if self.countdown < 0:
            return False
        if self.step < self.iter:
            print('%s running...' % self.text, file=sys.stderr)
            block(self.text, 0.05, 1.2, 0.5, 0.5, 0)
        for side in range(0, self.sides):
            base_angle = 360 * ((side + 1) / (self.sides))
            for sparkle in range(0, self.step if self.step < self.iter else self.iter):
                distance = sparkle
                if self.step > self.iter:
                    distance += self.step - self.iter
                self.step_jitters[side] += random.randint(-30, 30) * self.jitter
                block((self.text + " ") * self.sides,
                      0.03,
                      1.2,
                      0.5 - (0.3 + distance / 100) * math.cos(math.radians(base_angle + 5 * distance + self.step_jitters[side])),
                      0.5 + (0.3 + distance / 100) * math.sin(math.radians(base_angle + 5 * distance - self.step_jitters[side])),
                      base_angle + 4 * distance + self.step_jitters[side])
        self.step += 1
        return True


def perhaps(fragment, shape, insecurity=0):
    if shape > 1:
        for i in range(0, shape + 1):
            are_we_sure = insecurity
            turn = 360.0 * ((i + 1) / (shape + 1))
            for j in range(0, 200):
                if insecurity > 0:
                    are_we_sure += random.randint(-30, 30) * insecurity
                block((fragment + " ") * (8 - shape),
                      0.03,
                      1.2,
                      0.5 - (0.3 + j / 100) * math.cos(math.radians(turn + 5 * j + are_we_sure)),
                      0.5 + (0.3 + j / 100) * math.sin(math.radians(turn + 5 * j - are_we_sure)),
                      turn + 4 * j + are_we_sure)
    block(fragment, 0.05, 1.2, 0.5, 0.5, 0)
    clearpage()

def is_god():
    sentiment = 'god is between me and my heart'.split()
    lines = [
        perhaps(' '.join(sentiment[0:increasingly + 1]), increasingly)
        for increasingly in range(0, len(sentiment))]

def what_it_is_not():
    sentiment = 'god is not a part of me'.split()
    lines = [
            perhaps(' '.join(sentiment[0:7 - increasingly]), 7 - increasingly - 1, insecurity=0.07)
        for increasingly in range(0, len(sentiment))]

def but_what_if():
    sentiment = 'i stand apart from myself'.split()
    lines = [
            perhaps(' '.join(sentiment[0:increasingly + 1]), increasingly, insecurity=0.09)
        for increasingly in range(0, len(sentiment))]

def i_had_a_stance():
    sentiment = 'and god cannot stop me'.split()
    lines = [
            perhaps(' '.join(sentiment[0:increasingly + 1]), 5 - increasingly, insecurity=0.5)
        for increasingly in range(0, len(sentiment))]

def dril():
    sentiment = 'i will face god and walk backwards into hell'.split()
    lines = [
            perhaps(' '.join(sentiment[0:increasingly + 1]), 9 - increasingly, insecurity=0.07)
        for increasingly in range(0, len(sentiment))]

def dril_anim():
    cells = [
        cell('IF THE ZOO BANS ME', sides=3, iter=20),
        cell('FOR HOLLERING AT THE ANIMALS', sides=3, iter=20, max=50, delay=20),
        cell('I', sides=3, iter=10, delay=60),
        cell('I WILL', sides=4, iter=10, delay=70),
        cell('I WILL FACE', sides=4, iter=10, delay=80),
        cell('I WILL FACE GOD', sides=5, iter=15, delay=90, jitter=0.03),
        cell('AND WALK', sides=6, iter=10, delay=105, jitter=0.04),
        cell('AND WALK BACKWARDS', sides=7, iter=15, delay=115, jitter=0.04),
        cell('AND WALK BACKWARDS INTO', sides=8, iter=10, delay=130, jitter=0.05),
        cell('AND WALK BACKWARDS INTO HELL', sides=9, iter=30, delay=140, jitter=0.05)]
    while True:
        res = False
        for c in cells:
            curr = c.next()
            res = res or curr
        clearpage()
        if not res:
            break
