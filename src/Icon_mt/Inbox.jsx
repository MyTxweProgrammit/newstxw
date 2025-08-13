export default function Inbox({ width=18, height=18, cls="", color="#3e3e3e" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={cls} viewBox="0 0 16 16">
            <path fill={color} d="M0 1h16v12H8.414L6 15.414L3.586 13H0zm6 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"/>
        </svg>
    )
}