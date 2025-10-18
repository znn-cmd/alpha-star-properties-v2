interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  className?: string;
  type?: 'property' | 'team' | 'article' | 'area' | 'general';
}

export default function ImagePlaceholder({
  width = '100%',
  height = '100%',
  text,
  className = '',
  type = 'general',
}: ImagePlaceholderProps) {
  const getBackgroundColor = () => {
    switch (type) {
      case 'property':
        return '#26648E';
      case 'team':
        return '#4F8FC0';
      case 'article':
        return '#53D2DC';
      case 'area':
        return '#26648E';
      default:
        return '#E5E7EB';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'property':
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'team':
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'article':
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case 'area':
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
      default:
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{
        width,
        height,
        backgroundColor: getBackgroundColor(),
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        {getIcon()}
        {text && (
          <span className="text-white text-sm font-medium px-4 text-center">
            {text}
          </span>
        )}
      </div>
    </div>
  );
}

