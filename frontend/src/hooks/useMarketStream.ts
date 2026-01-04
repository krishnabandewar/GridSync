import { useEffect, useState } from 'react';
import { MarketUpdate } from '@/types';

type ConnectionStatus = 'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'ERROR';

interface UseMarketStreamReturn {
    data: MarketUpdate | null;
    status: ConnectionStatus;
    error: string | null;
}

export const useMarketStream = (url: string): UseMarketStreamReturn => {
    const [data, setData] = useState<MarketUpdate | null>(null);
    const [status, setStatus] = useState<ConnectionStatus>('CONNECTING');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let eventSource: EventSource | null = null;
        let retryTimeout: NodeJS.Timeout;

        const connect = () => {
            setStatus('CONNECTING');
            eventSource = new EventSource(url);

            eventSource.onopen = () => {
                setStatus('CONNECTED');
                setError(null);
            };

            eventSource.onmessage = (event) => {
                try {
                    const parsedData = JSON.parse(event.data);
                    setData(parsedData);
                } catch (e) {
                    console.error("Failed to parse SSE data", e);
                }
            };

            eventSource.onerror = (err) => {
                console.error('SSE Error', err);
                setStatus('ERROR');
                setError('Connection lost. Retrying...');
                eventSource?.close();

                // Auto retry after 3s
                retryTimeout = setTimeout(connect, 3000);
            };
        };

        connect();

        return () => {
            eventSource?.close();
            clearTimeout(retryTimeout);
            setStatus('DISCONNECTED');
        };
    }, [url]);

    return { data, status, error };
};
