'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { merge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';
import data from '@/lib/data';

const featurePages = {
  'profit-prediction-engine': ProfitPredictionEngine,
  'inventory-optimization': InventoryOptimization,
  'pricing-strategy-tool': PricingStrategyTool,
};

const Features = () => {
  const [featureSlug, setFeatureSlug] = useState('');
  const [featureData, setFeatureData] = useState([]);

  useEffect(() => {
    const slug = window.location.pathname.split('/').pop();
    setFeatureSlug(slug);

    if (slug) {
      const featureView = featurePages[slug];
      if (featureView) {
        setFeatureData(data[slug]);
      }
    }
  }, []);

  if (featureSlug) {
    const FeatureView = featurePages[featureSlug];
    return <FeatureView data={featureData} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <h1 className="text-3xl font-bold">Features</h1>
      <div className="grid grid-cols-1 gap-4">
        {Object.keys(featurePages).map((slug) => (
          <div
            key={slug}
            className={clsx(
              'p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200',
              merge(
                'bg-white',
                'text-gray-900',
                'hover:bg-gray-100',
                'hover:text-gray-900'
              )
            )}
          >
            <h2 className="text-lg font-bold">{slug.replace(/-/g, ' ')}</h2>
            <p className="text-sm text-gray-600">View more</p>
            <a
              href={`/dashboard/${slug}`}
              className={clsx(
                'flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition duration-200',
                merge(
                  'text-gray-600',
                  'hover:text-gray-900',
                  'transition',
                  'duration-200'
                )
              )}
            >
              View more <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfitPredictionEngine = ({ data }) => {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) => item.name.includes(filter));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Profit Prediction Engine</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={clsx(
            'p-2 border border-gray-200 rounded-lg hover:shadow-md transition duration-200',
            merge(
              'bg-white',
              'text-gray-900',
              'hover:bg-gray-100',
              'hover:text-gray-900'
            )
          )}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={clsx(
              'p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200',
              merge(
                'bg-white',
                'text-gray-900',
                'hover:bg-gray-100',
                'hover:text-gray-900'
              )
            )}
          >
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const InventoryOptimization = ({ data }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Inventory Optimization</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {data.map((item) => (
          <div
            key={item.id}
            className={clsx(
              'p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200',
              merge(
                'bg-white',
                'text-gray-900',
                'hover:bg-gray-100',
                'hover:text-gray-900'
              )
            )}
            onClick={() => setSelected(item)}
          >
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div className="p-4 mt-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-bold">{selected.name}</h2>
          <p className="text-sm text-gray-600">{selected.description}</p>
        </div>
      )}
    </div>
  );
};

const PricingStrategyTool = ({ data }) => {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) => item.name.includes(filter));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Pricing Strategy Tool</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={clsx(
            'p-2 border border-gray-200 rounded-lg hover:shadow-md transition duration-200',
            merge(
              'bg-white',
              'text-gray-900',
              'hover:bg-gray-100',
              'hover:text-gray-900'
            )
          )}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={clsx(
              'p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200',
              merge(
                'bg-white',
                'text-gray-900',
                'hover:bg-gray-100',
                'hover:text-gray-900'
              )
            )}
          >
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;