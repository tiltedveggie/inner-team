import React from 'react';
import { Link } from 'react-router-dom';
import './Blog-Item.css';

function BlogItem({ topic, description, topage }) {

	return(

		<div className='pb-[30px] mb-[32px] border-solid border-b-[1px] border-[#F2F2F2]'>

			<h6 className='text-[20px] text-[#54E280] font-semibold'> { topic } </h6>

			<p className='my-[16px] font-normal leading-[28px]'> { description } </p>

			<div className='flex items-center justify-end'>
				<Link to={`/blog/details${topage}`} className='flex items-center text-[#54E280] leading-[28px]'>
					Leer más

					<svg className='ml-[9px]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M4.48781 2.05044C4.53861 1.99951 4.59896 1.9591 4.6654 1.93153C4.73184 1.90396 4.80307 1.88977 4.875 1.88977C4.94693 1.88977 5.01816 1.90396 5.0846 1.93153C5.15104 1.9591 5.21139 1.99951 5.26219 2.05044L11.8247 8.61294C11.8756 8.66374 11.916 8.72408 11.9436 8.79052C11.9712 8.85696 11.9854 8.92819 11.9854 9.00012C11.9854 9.07206 11.9712 9.14328 11.9436 9.20972C11.916 9.27616 11.8756 9.33651 11.8247 9.38731L5.26219 15.9498C5.1595 16.0525 5.02022 16.1102 4.875 16.1102C4.72978 16.1102 4.5905 16.0525 4.48781 15.9498C4.38512 15.8471 4.32744 15.7078 4.32744 15.5626C4.32744 15.4174 4.38512 15.2781 4.48781 15.1754L10.6642 9.00012L4.48781 2.82481C4.43688 2.77401 4.39648 2.71366 4.36891 2.64722C4.34134 2.58078 4.32715 2.50956 4.32715 2.43762C4.32715 2.36569 4.34134 2.29446 4.36891 2.22802C4.39648 2.16158 4.43688 2.10124 4.48781 2.05044Z" fill="#54E280"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M8.86281 2.05056C8.91361 1.99963 8.97396 1.95922 9.0404 1.93165C9.10684 1.90408 9.17807 1.88989 9.25 1.88989C9.32193 1.88989 9.39316 1.90408 9.4596 1.93165C9.52604 1.95922 9.58639 1.99963 9.63719 2.05056L16.1997 8.61306C16.2506 8.66386 16.291 8.72421 16.3186 8.79065C16.3462 8.85709 16.3604 8.92831 16.3604 9.00025C16.3604 9.07218 16.3462 9.1434 16.3186 9.20984C16.291 9.27628 16.2506 9.33663 16.1997 9.38743L9.63719 15.9499C9.5345 16.0526 9.39522 16.1103 9.25 16.1103C9.10478 16.1103 8.9655 16.0526 8.86281 15.9499C8.76012 15.8472 8.70243 15.708 8.70243 15.5627C8.70243 15.4175 8.76012 15.2782 8.86281 15.1756L15.0392 9.00025L8.86281 2.82493C8.81188 2.77413 8.77148 2.71378 8.74391 2.64734C8.71634 2.5809 8.70215 2.50968 8.70215 2.43775C8.70215 2.36581 8.71634 2.29459 8.74391 2.22815C8.77148 2.16171 8.81188 2.10136 8.86281 2.05056Z" fill="#54E280"/>
					</svg>
				</Link>
			</div>

		</div>

	)
}


export default BlogItem;