import unittest
from matplotlib import pyplot as plt
from matplotlib.axes import Axes


def setup_mpl(low: float, high: float, ax: Axes):
    plt.xlim(low, high)
    plt.ylim(low, high)
    ax.invert_yaxis()


class TestQuadTree(unittest.TestCase):
    def test_subdivide(self):
        _, ax = plt.subplots()
        ax: Axes

        ax.add_artist(plt.Circle((20, 20), 10, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((80, 20), 10, color='green', alpha=0.3))
        ax.add_artist(plt.Circle((20, 80), 10, color='blue', alpha=0.3))
        ax.add_artist(plt.Circle((80, 80), 10, color='yellow', alpha=0.3))
        setup_mpl(0, 100, ax)
        plt.show()

    def test_find_intersections(self):
        _, ax = plt.subplots()
        ax: Axes

        ax.add_artist(plt.Circle((40, 40), 10, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((50, 30), 10, color='green', alpha=0.3))
        ax.add_artist(plt.Circle((37, 80), 10, color='blue', alpha=0.3))
        ax.add_artist(plt.Circle((53, 80), 10, color='yellow', alpha=0.3))
        setup_mpl(0, 100, ax)
        plt.show()
