import math

from utils import block, clearpage


def define():
    for row in range(-100, 100):
        if row > -5 and row < 5:
            continue
        for col in range(-20, 20):
            block("the soul is defined by",
                0.03,
                1.2,
                0.5 + float(row) / 50.0,
                0.5 - float(col) / 5.0 + math.sin(row / 9.1),
                0)
    block("negative space",
            0.05,
        1.2,
        0.5,
        0.5,
        0)
    clearpage()
