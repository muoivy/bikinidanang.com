export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20 text-foreground">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          Bikinidanang.com
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Nền tảng e-commerce bikini tối giản, sẵn sàng mở rộng.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Dự án đang ở giai đoạn nền tảng: chuẩn hóa kiến trúc, branding và data layer để tích hợp
          Headless WordPress + GraphQL trong các phase tiếp theo.
        </p>
      </section>
    </main>
  );
}
