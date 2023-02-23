import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-gray-100'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center layout gap-8'>
            <h1>Open Graph Generator</h1>
            <ButtonLink variant='light' href='/builder'>
              Link Builder
            </ButtonLink>
          </div>
        </section>
      </main>
    </>
  );
}
