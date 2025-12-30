# double-image

Create a single image that displays differently on black and white backgrounds.

This is especially useful for platforms like X (Twitter), where the same image can show different visuals in dark mode versus light mode.

## The technique

By carefully adjusting RGB values and the alpha channel, an image can appear differently depending on the background color, or remain invisible on one background while visible on another.

### Grayscale example

1. Preserving appearance on a white background
   | Luminance (0 - 1) | Alpha (0 - 1) | Image | On black | On white |
   | ----------------- | ------------- | ----- | -------- | -------- |
   | 1.00              | 1.00          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) |
   | 1.00              | 0.75          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a075.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l075_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) |
   | 1.00              | 0.50          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a050.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l050_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) |
   | 1.00              | 0.25          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a025.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l025_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) |
   | 1.00              | 0.00          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a000.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) |

2. Preserving appearance on a black background
   | Luminance (0 - 1) | Alpha (0 - 1) | Image | On black | On white |
   | ----------------- | ------------- | ----- | -------- | -------- |
   | 0.00              | 1.00          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) |
   | 0.00              | 0.75          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a075.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l025_a100.png) |
   | 0.00              | 0.50          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a050.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l050_a100.png) |
   | 0.00              | 0.25          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a025.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l075_a100.png) |
   | 0.00              | 0.00          | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a000.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l000_a100.png) | ![](https://raw.githubusercontent.com/azpald/double-image/refs/heads/main/img/square_l100_a100.png) |
