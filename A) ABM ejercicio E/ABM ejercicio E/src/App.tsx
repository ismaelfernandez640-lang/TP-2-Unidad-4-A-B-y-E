export default function Frame() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FFF] min-w-screen min-h-screen overflow-hidden">
      <div className="flex p-8 flex-col items-start rounded-lg border border-[#D1D5DB] bg-[#FFF] shadow-[04px16px0rgba(0,0,0,0.12)] w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#1A1A1A] font-workSans text-[34px] font-bold w-fit tracking-[-0.02em]">
            Agregar dirección
          </p>
          <div className="flex flex-col justify-center items-center w-8 h-8">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 w-4 h-4 overflow-hidden relative "
            >
              <path
                d="M12 4L8 8M8 8L4 12M8 8L4 4M8 8L12 12"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#555555"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-start w-full h-6"></div>
        <div className="flex flex-col items-start gap-1.5 w-full">
          <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
            Coordenadas *
          </p>
          <svg
            width="556"
            height="36"
            viewBox="0 0 556 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex flex-col justify-end items-start w-full h-9 "
          >
            <line y1="35.5" x2="556" y2="35.5" stroke="#C0C0C0" />
          </svg>
        </div>
        <div className="flex flex-col items-start w-full h-6"></div>
        <div className="flex flex-col items-start gap-1.5 w-full">
          <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
            Calle *
          </p>
          <svg
            width="556"
            height="36"
            viewBox="0 0 556 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex flex-col justify-end items-start w-full h-9 "
          >
            <line y1="35.5" x2="556" y2="35.5" stroke="#C0C0C0" />
          </svg>
        </div>
        <div className="flex flex-col items-start w-full h-6"></div>
        <div className="flex items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Número *
            </p>
            <svg
              width="170"
              height="36"
              viewBox="0 0 170 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex flex-col justify-end items-start w-full h-9 "
            >
              <line y1="35.5" x2="169.333" y2="35.5" stroke="#C0C0C0" />
            </svg>
          </div>
          <div className="flex flex-col items-start gap-1.5 w-full">
            <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Piso
            </p>
            <svg
              width="170"
              height="36"
              viewBox="0 0 170 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex flex-col justify-end items-start w-full h-9 "
            >
              <line y1="35.5" x2="169.333" y2="35.5" stroke="#C0C0C0" />
            </svg>
          </div>
          <div className="flex flex-col items-start gap-1.5 w-full">
            <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Depto
            </p>
            <svg
              width="170"
              height="36"
              viewBox="0 0 170 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex flex-col justify-end items-start w-full h-9 "
            >
              <line y1="35.5" x2="169.333" y2="35.5" stroke="#C0C0C0" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-start w-full h-6"></div>
        <div className="flex items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Ciudad *
            </p>
            <div className="flex py-2.5 px-3.5 justify-between items-center rounded-md border border-[#C0C0C0] w-full h-11">
              <p className="text-[#888] font-workSans text-[13px] w-fit tracking-[-0.02em]">
                Selecciona tu ciudad
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 overflow-hidden relative "
              >
                <path
                  d="M4 6L8 10L12 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke="#555555"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1.5 w-full">
            <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Localidad *
            </p>
            <div className="flex py-2.5 px-3.5 justify-between items-center rounded-md border border-[#C0C0C0] w-full h-11">
              <p className="text-[#888] font-workSans text-[13px] w-fit tracking-[-0.02em]">
                Selecciona tu localidad
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 overflow-hidden relative "
              >
                <path
                  d="M4 6L8 10L12 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke="#555555"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full h-6"></div>
        <div className="flex flex-col items-start gap-1.5 w-full">
          <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
            Aclaraciones
          </p>
          <svg
            width="556"
            height="36"
            viewBox="0 0 556 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex flex-col justify-end items-start w-full h-9 "
          >
            <line y1="35.5" x2="556" y2="35.5" stroke="#C0C0C0" />
          </svg>
        </div>
        <div className="flex flex-col items-start w-full h-6"></div>
        <div className="flex flex-col items-start gap-1.5 w-full">
          <p className="text-[#555] font-workSans text-[13px] w-fit tracking-[-0.02em]">
            Alias *
          </p>
          <svg
            width="556"
            height="36"
            viewBox="0 0 556 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex flex-col justify-end items-start w-full h-9 "
          >
            <line y1="35.5" x2="556" y2="35.5" stroke="#C0C0C0" />
          </svg>
        </div>
        <div className="flex flex-col items-start w-full h-8"></div>
        <div className="flex justify-end items-start gap-3 w-full">
          <button className="cursor-pointer text-nowrap flex py-2.5 px-6 justify-center items-center rounded-md border border-[#C0C0C0] bg-[#FFF] w-fit">
            <p className="text-[#333] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Cancelar
            </p>
          </button>
          <button className="cursor-pointer text-nowrap flex py-2.5 px-6 justify-center items-center rounded-md bg-[#555] w-fit">
            <p className="text-[#FFF] font-workSans text-[13px] w-fit tracking-[-0.02em]">
              Guardar
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}