import unittest
from matplotlib import pyplot as plt
from matplotlib.axes import Axes

from polygon import Polygon


def setup_mpl(low: float, high: float, ax: Axes):
    plt.xlim(low, high)
    plt.ylim(low, high)
    ax.invert_yaxis()


class CircleCircle(unittest.TestCase):
    def test_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -15, 0, 20
        x2, y2, r2 = 15, 0, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -15, 20
        x2, y2, r2 = 0, 15, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -10, -10, 20
        x2, y2, r2 = 10, 10, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_not_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -21, 0, 20
        x2, y2, r2 = 21, 0, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_not_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -21, 20
        x2, y2, r2 = 0, 21, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_not_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -15, -15, 20
        x2, y2, r2 = 15, 15, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_one_common_point(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -20, 0, 20
        x2, y2, r2 = 20, 0, 20

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()

    def test_one_inside_another(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 0, 0, 40

        ax.add_artist(plt.Circle((x1, y1), r1, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))
        setup_mpl(-50, 50, ax)
        plt.show()


class TriangleTriangle(unittest.TestCase):
    def test_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -10, 0, 20
        x2, y2, r2 = 10, 0, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -10, 20
        x2, y2, r2 = 0, 10, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -5, -5, 20
        x2, y2, r2 = 5, 5, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -20, 0, 20
        x2, y2, r2 = 20, 0, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -20, 20
        x2, y2, r2 = 0, 20, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -12, -12, 20
        x2, y2, r2 = 12, 12, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_one_inside_another(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 1, 1, 40

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()


class HexagonHexagon(unittest.TestCase):
    def test_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -12, 0, 20
        x2, y2, r2 = 12, 0, 20

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -12, 20
        x2, y2, r2 = 0, 12, 20

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -10, -10, 20
        x2, y2, r2 = 10, 10, 20

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -21, 0, 20
        x2, y2, r2 = 21, 0, 20

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -21, 20
        x2, y2, r2 = 0, 21, 20

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -14, -14, 20
        x2, y2, r2 = 14, 14, 20

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_one_inside_another(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 1, 1, 40

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

class TriangleHexagon(unittest.TestCase):
    def test_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -12, 0, 20
        x2, y2, r2 = 12, 0, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -12, 20
        x2, y2, r2 = 0, 12, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -10, -10, 20
        x2, y2, r2 = 10, 10, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -21, 0, 20
        x2, y2, r2 = 21, 0, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -21, 20
        x2, y2, r2 = 0, 21, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-50, 50, ax)
        plt.show()

    def test_not_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -15, -15, 20
        x2, y2, r2 = 15, 15, 20

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_triangle_inside_hexagon(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 1, 1, 40

        a = Polygon(x1, y1, 3, r1)
        b = Polygon(x2, y2, 6, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_hexagon_inside_triangle(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 1, 1, 60

        a = Polygon(x1, y1, 6, r1)
        b = Polygon(x2, y2, 3, r2)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Polygon(b.vertices, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )
        ax.scatter(
            [i[0] for i in b.vertices],
            [i[1] for i in b.vertices],
            color='blue'
        )

        setup_mpl(-70, 70, ax)
        plt.show()


class TriangleCircle(unittest.TestCase):
    def test_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -10, 0, 20
        x2, y2, r2 = 10, 0, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -10, 20
        x2, y2, r2 = 0, 14, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -10, -10, 20
        x2, y2, r2 = 10, 10, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -20, 0, 20
        x2, y2, r2 = 20, 0, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -20, 20
        x2, y2, r2 = 0, 20, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -15, -15, 20
        x2, y2, r2 = 15, 15, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_triangle_inside_circle(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 1, 1, 40

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-50, 50, ax)
        plt.show()

    def test_circle_inside_triangle(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 1, 1, 60
        x2, y2, r2 = 10, 10, 20

        a = Polygon(x1, y1, 3, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-70, 70, ax)
        plt.show()


class HexagonCircle(unittest.TestCase):
    def test_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -12, 0, 20
        x2, y2, r2 = 12, 0, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -10, 20
        x2, y2, r2 = 0, 14, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -12, -12, 20
        x2, y2, r2 = 12, 12, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_x_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -21, 0, 20
        x2, y2, r2 = 21, 0, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_y_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 0, -20, 20
        x2, y2, r2 = 0, 20, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_not_colliding_both_axis(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = -15, -15, 20
        x2, y2, r2 = 15, 15, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-40, 40, ax)
        plt.show()

    def test_hexagon_inside_circle(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 10, 10, 20
        x2, y2, r2 = 1, 1, 40

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-50, 50, ax)
        plt.show()

    def test_circle_inside_hexagon(self):
        _, ax = plt.subplots()
        ax: Axes

        x1, y1, r1 = 1, 1, 60
        x2, y2, r2 = 10, 10, 20

        a = Polygon(x1, y1, 6, r1)

        ax.add_artist(plt.Polygon(a.vertices, color='red', alpha=0.3))
        ax.add_artist(plt.Circle((x2, y2), r2, color='blue', alpha=0.3))

        ax.scatter(
            [i[0] for i in a.vertices],
            [i[1] for i in a.vertices],
            color='red'
        )

        setup_mpl(-70, 70, ax)
        plt.show()
