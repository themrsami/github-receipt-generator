# GitHub Receipt Generator

Transform your GitHub profile into a sleek, receipt-style image showcasing your stats and top repositories. Perfect for developers who love to quantify their achievements!

## Features

- Generate a receipt-style image of GitHub user profiles
- Display key GitHub stats (followers, following, public repos)
- Show top 5 repositories by star count
- Dark mode support
- Downloadable receipt as a PNG image

## Installation

1. Clone the repository:

```plaintext
git clone https://github.com/themrsami/github-receipt-generator.git
```


2. Navigate to the project directory:

```plaintext
cd github-receipt-generator
```


3. Install dependencies:

```plaintext
pnpm install
```


4. Start the development server:

```plaintext
pnpm dev --turbo
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Usage

1. Enter a GitHub username in the input field.
2. Click the "Generate Receipt" button.
3. View the generated receipt with the user's GitHub stats and top repositories.
4. Click the "Download Receipt" button to save the receipt as a PNG image.


## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [html-to-image](https://github.com/bubkoo/html-to-image)


## Project Structure

- `app/`: Contains the main application files

- `layout.tsx`: Root layout component
- `page.tsx`: Main page component



- `components/`: Reusable React components

- `footer.tsx`: Footer component
- `hero.tsx`: Hero section component
- `mode-toggle.tsx`: Dark mode toggle component
- `navbar.tsx`: Navigation bar component
- `receipt-generator.tsx`: Main receipt generator component
- `receipt.tsx`: Receipt display and download component
- `theme-provider.tsx`: Theme provider for dark mode support



- `public/`: Static assets


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Usama Nazir - [@themrsami](https://twitter.com/themrsami)

Project Link: [Github Receipt Generator](https://github.com/themrsami/github-receipt-generator)

---

Made with ❤️ by Usama