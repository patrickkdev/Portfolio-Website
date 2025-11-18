export default function FeatureSection({
    title,
    subtitle,
    description,
    linkText,
    linkHref,
    imageSrc,
    reverse = false,
}: {
    title: string
    subtitle: string
    description: string
    linkText: string
    linkHref: string
    imageSrc: string
    reverse?: boolean
}) {
    return (
            <div className="max-w-screen-xl mx-auto md:px-8 py-16">
                <div
                    className={
                        "items-center gap-x-12 sm:px-4 md:px-0 lg:flex" +
                        (reverse ? " lg:flex-row-reverse" : "")
                    }
                >
                    <div className="flex-1 sm:hidden lg:block">
                        <img
                            src={imageSrc}
                            className="md:max-w-lg sm:rounded-lg"
                            alt=""
                        />
                    </div>

                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-primary-600 font-semibold">
                            {title}
                        </h3>

                        <p className="text-3xl font-semibold sm:text-4xl">
                            {subtitle}
                        </p>

                        <p className="mt-3 font-light">
                            {description}
                        </p>

                        {
                          linkHref &&
                          <a
                              href={linkHref}
                              className="inline-flex gap-x-1 items-center text-primary-600 hover:text-primary-500 duration-150 font-medium"
                          >
                              {linkText}
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5"
                              >
                                  <path
                                      fillRule="evenodd"
                                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                          </a>
                        }
                    </div>
                </div>
            </div>
    )
}
