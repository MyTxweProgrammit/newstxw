export default function Search({width=18, height=18, color="#5f5f5f", cls=""}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} width={width} height={height} viewBox="0 0 24 24">
            <path fill={color} d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"/>
        </svg>
    )
}