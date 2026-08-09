from manim import *
import numpy as np

LIME = ManimColor("#78C850")
LIME_LIGHT = ManimColor("#A0E070")
LIME_DARK = ManimColor("#4CA64C")
BG = ManimColor("#090a0c")
TEXT = ManimColor("#f3efe8")
GOLD = ManimColor("#d7a350")
WHITE = ManimColor("#FFFFFF")
SUGAR = ManimColor("#FFFAE6")

class LimeSugarLogo(Scene):
    def construct(self):
        self.camera.background_color = BG
        
        # === PHASE 1: Particles converge (0-0.6s) ===
        particles = VGroup()
        np.random.seed(42)
        for i in range(50):
            angle = np.random.uniform(0, TAU)
            radius = np.random.uniform(3, 5)
            x = radius * np.cos(angle)
            y = radius * np.sin(angle)
            
            c = LIME.interpolate(LIME_LIGHT, np.random.random())
            dot = Dot(
                point=[x, y, 0],
                radius=np.random.uniform(0.02, 0.06),
                color=c,
                fill_opacity=0.6,
            )
            particles.add(dot)
        
        # Target positions - form a circle
        target_positions = []
        for i in range(50):
            angle = np.random.uniform(0, TAU)
            radius = np.random.uniform(0.8, 1.6)
            target_positions.append([radius * np.cos(angle), radius * np.sin(angle), 0])
        
        self.play(
            *[p.animate.move_to(target_positions[i]).set_fill(opacity=0.9).set_color(LIME_LIGHT) 
              for i, p in enumerate(particles)],
            run_time=0.6,
            rate_func=smooth,
        )
        
        # === PHASE 2: Lime circle forms (0.6-1.2s) ===
        outer_ring = Circle(radius=1.8, color=LIME, stroke_width=4, fill_opacity=0)
        inner_ring = Circle(radius=1.8, color=LIME_LIGHT, stroke_width=2, fill_opacity=0)
        
        lime_base = Circle(radius=1.6, color=LIME, fill_opacity=0.9, stroke_width=0)
        lime_inner = Circle(radius=1.3, color=LIME_LIGHT, fill_opacity=0.95, stroke_width=0)
        lime_core = Circle(radius=0.3, color=SUGAR, fill_opacity=1, stroke_width=0)
        
        segments = VGroup()
        for i in range(6):
            angle = i * 60 * DEGREES
            line = Line(
                start=0.45 * 1.3 * np.array([np.cos(angle), np.sin(angle), 0]),
                end=1.3 * 0.85 * np.array([np.cos(angle), np.sin(angle), 0]),
                color=SUGAR,
                stroke_width=2.5,
                stroke_opacity=0.9,
            )
            segments.add(line)
        
        lime_group = VGroup(lime_base, lime_inner, lime_core, segments)
        
        self.play(
            Create(outer_ring),
            Create(inner_ring),
            run_time=0.3,
        )
        self.play(
            outer_ring.animate.scale(1.5).set_stroke(opacity=0, width=0.5),
            FadeIn(lime_group, scale=0.3),
            run_time=0.5,
            rate_func=rush_from,
        )
        self.play(
            FadeIn(segments, lag_ratio=0.05),
            run_time=0.3,
        )
        self.remove(outer_ring, inner_ring)
        
        # === PHASE 3: Sugar crystals sparkle (1.2-1.6s) ===
        crystals = VGroup()
        np.random.seed(42)
        for _ in range(20):
            angle = np.random.uniform(0, TAU)
            dist = np.random.uniform(0.5, 1.5) * 1.6
            px = dist * np.cos(angle)
            py = dist * np.sin(angle)
            if px**2 + py**2 < (1.6 * 0.75)**2:
                sz = np.random.uniform(0.04, 0.1)
                sq = Square(side_length=sz, color=WHITE, fill_opacity=0.8, stroke_width=0)
                sq.move_to([px, py, 0]).rotate(np.random.uniform(0, PI / 2))
                crystals.add(sq)
        
        self.play(
            LaggedStart(*[FadeIn(c, scale=2) for c in crystals], lag_ratio=0.03),
            run_time=0.4,
        )
        
        # === PHASE 3: Text "LimeSugar" types in (1.6-2.2s) ===
        title_ref = Text("LimeSugar", font_size=72, color=LIME, weight=BOLD)
        chars = VGroup()
        text = "LimeSugar"
        total_w = len(text) * 0.62
        start_x = -total_w / 2
        for i, ch in enumerate(text):
            c = Text(ch, font_size=72, color=LIME, weight=BOLD)
            c.move_to([start_x + i * 0.62, -2.8, 0])
            chars.add(c)
        
        self.play(
            LaggedStart(*[FadeIn(c, shift=UP * 0.2) for c in chars], lag_ratio=0.04),
            run_time=0.5,
        )
        
        # === PHASE 4: Subtitle (2.2-2.4s) ===
        sub = Text("ANIME  ·  DRAMA  ·  HOLLYWOOD", font_size=18, color="#888888")
        sub.next_to(chars, DOWN, buff=0.3)
        self.play(FadeIn(sub, shift=UP * 0.1), run_time=0.2)
        
        # === PHASE 5: Final glow pulse (2.4-2.8s) ===
        glow = Circle(radius=2.3, color=LIME, fill_opacity=0, stroke_width=0)
        self.play(
            FadeIn(glow, scale=0.8),
            glow.animate.scale(1.5).set_fill(opacity=0.08),
            run_time=0.2,
            rate_func=rush_from,
        )
        self.play(
            glow.animate.scale(0.9).set_fill(opacity=0.15),
            run_time=0.15,
        )
        
        self.wait(0.3)


class LimeSugarLoader(Scene):
    """Looping loader animation for website"""
    def construct(self):
        self.camera.background_color = BG
        
        lime_base = Circle(radius=1.6, color=LIME, fill_opacity=0.9, stroke_width=0)
        lime_inner = Circle(radius=1.3, color=LIME_LIGHT, fill_opacity=0.95, stroke_width=0)
        lime_core = Circle(radius=0.3, color=SUGAR, fill_opacity=1, stroke_width=0)
        
        segments = VGroup()
        for i in range(6):
            angle = i * 60 * DEGREES
            line = Line(
                start=0.45 * 1.3 * np.array([np.cos(angle), np.sin(angle), 0]),
                end=1.3 * 0.85 * np.array([np.cos(angle), np.sin(angle), 0]),
                color=SUGAR, stroke_width=2.5, stroke_opacity=0.9,
            )
            segments.add(line)
        
        lime_group = VGroup(lime_base, lime_inner, lime_core, segments)
        
        glow = Circle(radius=2.0, color=LIME, fill_opacity=0, stroke_width=0)
        
        self.add(lime_group, glow)
        
        self.play(
            Rotate(segments, angle=TAU, rate_func=linear),
            glow.animate.scale(1.3).set_fill(LIME, opacity=0.1),
            run_time=2,
            rate_func=linear,
        )
        self.play(
            Rotate(segments, angle=-TAU, rate_func=linear),
            glow.animate.scale(1/1.3).set_fill(opacity=0),
            run_time=2,
            rate_func=linear,
        )
        
        self.wait(0.1)