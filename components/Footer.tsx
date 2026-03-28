export default function Footer() {
  return (
    <footer className="w-full bg-neutral-100 pt-20 pb-10 dark:bg-neutral-950" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 text-sm leading-relaxed text-neutral-800 md:grid-cols-3 dark:text-neutral-200">
        <div>
          <h3 className="mb-4 font-headline text-lg font-bold text-neutral-900 dark:text-white">Explore</h3>
          <ul className="space-y-3">
            <li>
              <a
                className="text-neutral-500 decoration-neutral-300 underline-offset-4 transition-all duration-300 hover:underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-neutral-500 decoration-neutral-300 underline-offset-4 transition-all duration-300 hover:underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/#projects"
              >
                Projects
              </a>
            </li>
            
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-headline text-lg font-bold text-neutral-900 dark:text-white">Bora conversar?</h3>
          <p className="mb-6 text-neutral-500 dark:text-neutral-400">
            Entre em contato comigo via e-mail ou LinkedIn!
          </p>
          <a
            className="text-xl font-semibold text-neutral-900 decoration-neutral-300 underline-offset-8 transition-all duration-300 hover:underline dark:text-white"
            href="mailto:matheusluis90@gmail.com"
          >
           Mandar um e-mail
          </a>
        </div>
        <div>
          <h3 className="mb-4 font-headline text-lg font-bold text-neutral-900 dark:text-white">Connect</h3>
          <div className="mt-4 flex items-center gap-6">
            <a
              className="group text-neutral-500 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              href="#"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="group text-neutral-500 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              href="#"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              className="group text-neutral-500 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              href="#"
            >
              <span className="sr-only">Dribbble</span>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm10.12-10.358c-.35-.11-2.47-.746-4.998-.344.981 2.422 1.374 4.433 1.482 5.088 2.155-1.311 3.515-3.515 3.516-4.744zm-4.476 5.96c-.102-.567-.502-2.583-1.531-5.076-4.387 1.418-5.75 4.39-5.931 4.828 1.597.659 3.35 1.03 5.192 1.03 1.225 0 2.371-.186 3.45-.515-1.18-.532-1.18-.532-1.18-.532zm-7.423.739c.14-.379 1.455-3.551 6.132-4.945.06-.145.12-.293.18-.445.112-.281.21-.559.299-.832-5.958-.409-11.136.728-11.136.728-.182 1.383.397 2.85 1.312 4.025 1.026 1.321 2.127 1.469 3.213 1.469zm-3.741-6.739s5.193-1.127 11.315-.569c-.118-.27-.243-.547-.378-.832-1.25-2.738-2.859-4.887-2.859-4.887-4.323 1.516-7.815 6.288-8.078 6.288zm3.037-9.151c.08.105 1.64 2.156 2.937 4.721 3.556-1.258 5.071-3.555 5.071-3.555-1.516-.763-3.23-1.197-5.044-1.197-.184 0-.366.005-.546.014.004.006-.418.017-1.418.017zm8.106 1.354c-.033.053-1.562 2.405-5.188 3.731.029.066.057.132.088.199.126.285.258.539.369.777 2.856-.455 5.42.359 5.42.359.043-.668.065-1.345.065-2.027 0-1.058-.231-2.062-.754-3.039z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-center border-t border-neutral-200 px-8 pt-10 dark:border-neutral-800">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 ">© 2026 Matheus Cobel.</p>
        
      </div>
    </footer>
  );
}
