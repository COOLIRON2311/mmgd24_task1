import math


class Polygon:
    vertices: list[tuple[float, float]]
    x: float
    y: float
    n: int
    r: int

    def __init__(self, x: float, y: float, n: int, r: int) -> None:
        self.x = x
        self.y = y
        self.n = n
        self.r = r

        center_angle = 360 / self.n
        step = math.radians(center_angle)

        if self.n % 2 == 0:
            angle = math.radians(-90 - center_angle / 2)
        else:
            angle = math.radians(-90)

        self.vertices = []
        for _ in range(n):
            self.vertices.append((
                self.x + self.r * math.cos(angle),
                self.y + self.r * math.sin(angle)
            ))
            angle += step
