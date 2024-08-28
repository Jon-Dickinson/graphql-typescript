import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROUTE_BY_PATH } from '../lib/query';

const PageComponent = ({ path }: { path: string }) => {
  const { data, loading, error } = useQuery(GET_ROUTE_BY_PATH, {
    variables: { path },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { routeByPath } = data;
  const { page } = routeByPath;
  const { pageContent } = page;
  
  return (
    <div className="wrapper">
      <div className="mid-wrapper">
      <h1>Path: {routeByPath.path}</h1>
      <h2>Page Details:</h2>
      <p>ID: {page.id}</p>
      <p>Type: {page.type}</p>
      <p>Locale: {page.locale}</p>

      <h2>Page Content:</h2>
      <p>Page Type: {pageContent.pageType}</p>
      <p>Published: {pageContent.published ? 'Yes' : 'No'}</p>
      <p>ID: {pageContent.id}</p>
      <p>Title: {pageContent.title}</p>
      <p>Full Width Layout: {pageContent.fullWidthLayout ? 'Yes' : 'No'}</p>
      <p>Secondary Background: {pageContent.secondaryBackground ? 'Yes' : 'No'}</p>
      <p>Created At: {new Date(pageContent.createdAt).toLocaleString()}</p>

      <h3>Author:</h3>
      <p>ID: {pageContent.author.id}</p>
      <p>Name: {pageContent.author.name}</p>

      <h3>Meta Tags:</h3>
      {pageContent.metaTags.map((tag, index) => (
        <div key={index}>
          <p>Key: {tag.key}</p>
          <p>Value: {tag.value}</p>
          <p>Type: {tag.type}</p>
        </div>
      ))}

      <h3>Sections:</h3>
      {pageContent.sections.map((section, index) => (
        <div key={index}>
          <p>Type: {section.type}</p>
          <h4>Settings:</h4>
          {section.settings.map((setting, settingIndex) => (
            <div key={settingIndex}>
              <p>Key: {setting.key}</p>
              <p>Value: {setting.value}</p>
            </div>
          ))}
          <h4>Blocks:</h4>
          {section.blocks.map((block, blockIndex) => (
            <div key={blockIndex}>
              <p>Name: {block.name}</p>
              <p>Width: {block.options.width}</p>
              <h5>Components:</h5>
              {block.components.map((component, componentIndex) => (
                <div key={componentIndex} style={{ textAlign: component.alignment }}>
                  <p>Label: {component.label}</p>
                  {component.body && (
                    <>
                      <h6>Body:</h6>
                      <div dangerouslySetInnerHTML={{ __html: component.body.html }} />
                    </>
                  )}
                  {component.html && (
                    <>
                      <h6>HTML Content:</h6>
                      <div dangerouslySetInnerHTML={{ __html: component.html.html }} />
                    </>
                  )}
                  {component.image && (
                    <>
                      <h6>Image:</h6>
                      <p>Alt: {component.image.alt}</p>
                      {component.image.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex}>
                          <p>Size: {size.size}</p>
                          <p>URL: <a href={size.url} target="_blank" rel="noopener noreferrer">{size.url}</a></p>
                          <p>Dimensions: {size.width}x{size.height}</p>
                        </div>
                      ))}
                    </>
                  )}
                  {component.items && (
                    <>
                      <h6>Items:</h6>
                      {component.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <p>Title: {item.title}</p>
                          <div dangerouslySetInnerHTML={{ __html: item.copy }} />
                          {item.image && (
                            <>
                              <p>Image Alt: {item.image.alt}</p>
                              {item.image.sizes.map((size, sizeIndex) => (
                                <div key={sizeIndex}>
                                  <p>Size: {size.size}</p>
                                  <p>URL: <a href={size.url} target="_blank" rel="noopener noreferrer">{size.url}</a></p>
                                  <p>Dimensions: {size.width}x{size.height}</p>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
};

export default PageComponent;
