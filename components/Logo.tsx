import Image from 'next/image';

function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2'>
        <Image 
            className='object-cover'
            height={props.height || 50}
            width={props.width || 50}
            alt='Logo'
            src={props.src || '/Seducer.svg'}
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo