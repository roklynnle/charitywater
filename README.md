<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Charity: Water Landing Page</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background-color: #000000;
    }

    header {
      background-color: #000000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: -1.5rem 2rem 2rem 2rem;
      color: white;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }

    .left-header {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    nav {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin-top: 8rem;
    }

    nav a {
      cursor: pointer;
      border: 2px solid transparent;
      background-color: #77a8bb;
      color: #003366;
      padding: 0.75rem 1.5rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      display: inline-block;
      transition: all 0.3s ease;
    }

    nav a:hover {
      outline: 2px solid white;
      transform: translateY(-2px);
      position: relative;
      z-index: 2;
    }

    .donate-btn {
      background-color: #77a8bb;
      color: #003366;
      padding: 0.75rem 1.5rem;
      position: relative; right: -1200px;
      top: -100px;
      justify-content: space-between;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: none;
      outline: none;
      display: inline-block;
      margin-top: 0;
    }

    .donate-btn:hover {
      outline: 2px solid white;
      animation: bounceUp 0.5s ease;
      position: space-between;
      z-index: 2;
    }

    .hero {
      background-color: #003366;
      color: white;
      padding: 3rem 2rem 2rem 2rem;
      top: -60px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 1rem 2rem 1rem;
      border-radius: 20px;
      position: relative;
      z-index: 1;
    }

    .hero-text {
      max-width: 45%;
    }

    .hero-text h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .hero-text p {
      font-size: 1rem;
      margin-bottom: 2rem;
      line-height: 1.5;
    }

    .hashtag {
      background-color: #77a8bb;
      color: #003366;
      padding: 0.5rem 1rem;
      display: inline-block;
      border-radius: 6px;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .learn-more-btn {
      background-color: #77a8bb;
      color: #003366;
      padding: 1rem 2rem;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .learn-more-btn:hover {
      outline: 2px solid white;
      animation: bounceUp 0.5s ease;
      position: relative;
      z-index: 2;
    }

    @keyframes bounceUp {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .hero-images {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      max-width: 50%;
      justify-content: center;
    }

    .hero-images img {
      object-fit: cover;
      border-radius: 12px;
    }

    .hero-images img:nth-child(1) {
      width: 100%;
      max-height: 300px;
      opacity: 0.9;
      border-radius: 20px;
      box-shadow: 0 0 15px rgba(255,255,255,0.2);
    }
    .hero-images img:nth-child(2) {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-position: center top;
    }
    .hero-images img:nth-child(3) {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-position: center top;
    }
    .hero-images img:nth-child(4) {
      width: 45%;
      height: auto;
    }

  </style>
</head>
<body>
  <header>
    <div class="left-header">
      <img src="https://i.postimg.cc/NMhk08fw/charitywater-logo-horizontal-White-Text.png" alt="Charity: Water Logo" style="height: 40px;">
      <nav>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">What do we do?</a>
      </nav>
    </div>
    <button type="button" class="donate-btn" style="margin-right: auto; margin-left: auto; margin-top: 0.5rem;">Donate Here →</button>
  </header>

  <section class="hero">
    <div class="hero-text">
      <div class="hashtag">#jointhemovement</div>
      <h1>Change Starts with Us,<br>Clean Water for all</h1>
      <p>Advocate and use your voice to make a difference in the lives of others, join now to help give water for those in need. Learn how you can be a part of this organization today.</p>
      <button class="learn-more-btn">Learn More →</button>
    </div>
    <div class="hero-images">
      <img src="https://cdn2.dropmarkusercontent.com/52043/1b90606fe869585aa4a73fef2d582743544c85398f725fd9457aacb60006aa32/0207_Ethiopia_2019_CG-.jpg?Expires=1751835304&Signature=TEJQvniRioVoCwLDmsj9G9qU2xneKNh3rG0tXZN-sxloDardeWan4DJpTXfLSWHtAcfzXeefMfWx~eKNJElwZ9icaMMmFKkZxMPioUvwOKeA7zwzwSJY9JwHszBggX4~T9lMJj5NgTuJaJkkQqF1cET6V-0RcsEbRiPaETNxltJ7ne59FPQlJIyE7Sl5GYw5KUhUd5DRd~QH4j2wpOTV0HmbhLc0fAr3UdJsLXtP9Du0g-83gvTqQoq5~Yli1n41JPdMmFzmXjIn7jU0HQFeOrhg9Tlkb2gQUijgjZJVzjdSdmOl6e9KI52YY1ulRrvbgJgqgcJ5OsNB3LRgUPY2Sw__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ" alt="Water Image 1">
      <img src="https://cdn2.dropmarkusercontent.com/52043/40ba41fc45e5e377672c3ed45d1f0b554df90beb280d7c7278bb8013ce08bee4/4800_Ethiopia_2019_CG-.jpg?Expires=1751835348&Signature=NYw4nhbfKFJt2~ny72f7SoVTUDyrxRMrXcRdsWqBB0DuIyU-Athi1fGhLeqG1fdDbVIUU7WPzXMq1SQecAfx9JX4~n4JwT6J4h6wrV0xbyaOer2c37PnnFrdElprGhR6GFfuLJIyRUZyHNu6x~SK3R90CADzLLLta--l9pTECON9w-hJtBjZeyu3725qR2rflA~TMTFN9euMtpV0Zp6IqmE1kOeo5mnQZX12zYEa-LwmIfF7PpZm~YeP5lqpkvR-fal-NjwXuIZzpLK7fthgDfSEoAR1DCmIQ9MV0KeF-yE9KVcZlxjKEj3g04~vVIOb9TjeHjMVORnwLcI3XQCxcA__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ" alt="Water Image 2">
      <img src="https://cdn2.dropmarkusercontent.com/52043/a0ee6da6d6c0b14400f8c80618aebb6265ff6908bd0562e881adcb5420af230e/charity_water_Tanzania_TaraShupePhotography_0074.jpg?Expires=1751787855&Signature=F-2QCOQgq65tLrPHq~4FjPyZ45i5DovpoTxek6UGJd74s2BsJxARy6LGF0PJJtLYbCHLkpC3S9AuZiNTV5z75LYMG3PNVL3-SjgAqIB14YM577iMxkX8GLZrYRm7GUy415eUJ2cDVD1nK3qbW6wTzBmRA4ewdRmBkCKkHie6BtjPrUE4vhwciyqV0JeZFE-EW-dDC6mSj-7bhAWg7WDuydQtIS5G0-q7WWUKBazbwUejgEIjYWqFdZQSBdD2-3x2AuI08uWoAUp89XY4StkCHoDU~ivTc5e6Z1Gux-Xy4psppT2pgzN-r5~F9u6sz1oeWoHS~As7l9c~Dyj0JHSS8g__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ" alt="Water Image 3">
      <img src="https://cdn2.dropmarkusercontent.com/52043/3554db57df40eeeb07505e24f5ab8ffbbc44ff9ff4129559b4c08fe789785ffd/9927_Ethiopia_2019_CG-.jpg?Expires=1751835455&Signature=S4miqWi~76LSV1lC3S8Hp0PCw0B4Dyf6WewJ3m9MlddpoJrSwKfOCBWzqns0po7jb2BPq326f4oKyNh4oM0-mJqv-j6cjfyaw1868a5xr-UYI29heKwzwOHLdH6-su2c-aXo1ivkyYyDjk6~qLlQzBJQdE170aJdIQL1fojRP~2KCOGDdfGjIjFOoENXdjvN~tWZwHh7s-IbAN6YiWT7xkbRJmNv4KKpg2kX8wfZeoNuvB~MANKFXukXKw6yM89LvF-VpYGLvsT0k-wLAj2-8f8JnKWw1L1P8jMilRm6rkr4dRQp90qHEq5Gq--eLSJ9dKVqf1G-n83RQvM-FYG2rg__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ" alt="Water Image 4">
    </div>
  </section>
</body>
</html>
