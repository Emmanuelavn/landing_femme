from pathlib import Path
import textwrap
from PIL import Image, ImageDraw, ImageFont

out_dir = Path(r"C:\Users\Emmanuel\Music\elyx-funnel\public")
out_dir.mkdir(exist_ok=True)

w, h = 1080, 1920
bg = (238, 246, 239)
font_path = r"C:\Windows\Fonts\segoeui.ttf"

try:
    font = ImageFont.truetype(font_path, 42)
    small = ImageFont.truetype(font_path, 34)
except Exception:
    font = ImageFont.load_default()
    small = ImageFont.load_default()

messages = [
    "Tu sais quoi… en 10 jours j'ai senti la différence. Il est plus attentionné et me respecte plus.",
    "J'ai appliqué le levier 6 hier. Zéro drame, mais c'est clair. Il a compris.",
    "Je me sens enfin stable. Plus de panique. Merci 🙏🏽",
    "Il m'a dit : ‘t'es différente’. Exactement ce que je voulais 🙌🏽",
]

def make_image(idx: int) -> None:
    img = Image.new("RGB", (w, h), bg)
    d = ImageDraw.Draw(img)

    # header
    d.text((w // 2 - 170, 40), "Messages WhatsApp", fill=(60, 80, 70), font=small)

    bubble_color = (220, 248, 198)
    text_color = (30, 40, 35)
    y = 160

    for i in range(3):
        text = messages[(idx + i) % len(messages)]
        lines = textwrap.wrap(text, width=26)

        line_widths = [d.textbbox((0, 0), line, font=font)[2] for line in lines]
        tw = max(line_widths) if line_widths else 0
        th = sum(d.textbbox((0, 0), line, font=font)[3] for line in lines) + (len(lines) - 1) * 8

        bx = w - 80 - tw - 60
        by = y
        bw = tw + 60
        bh = th + 40

        d.rounded_rectangle([bx, by, bx + bw, by + bh], radius=32, fill=bubble_color)

        ty = by + 20
        for line in lines:
            d.text((bx + 30, ty), line, fill=text_color, font=font)
            ty += d.textbbox((0, 0), line, font=font)[3] + 8

        y = by + bh + 50

    out = out_dir / f"whatsapp-soisfemme-{idx + 1}.jpg"
    img.save(out, quality=92)
    print("Wrote", out)


for i in range(3):
    make_image(i)
