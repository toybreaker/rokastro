import os
import sys
import cairosvg

def convert_svg_to_png(input_svg, output_png, width):
    cairosvg.svg2png(url=input_svg, write_to=output_png, output_width=width)

def convert_svgs_in_directory(directory, width):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.lower().endswith(".svg"):
                input_svg = os.path.join(root, filename)
                output_png = os.path.splitext(input_svg)[0] + ".png"
                convert_svg_to_png(input_svg, output_png, width)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python svg_to_png_recursive.py directory")
    else:
        target_directory = sys.argv[1]
        convert_svgs_in_directory(target_directory, 1920)
