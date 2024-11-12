import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import CMSComponent from "./CMSComponent";

const LocalImplementationProject = ({ name, preview, order, description }) => {
  const [showModal, setShowModal] = useState(false);
  if (parseInt(order) === 1) {
    return (
      <div className="col-12 mb-5 intro-section">
        <h2 className="text-primary">{name}</h2>
        <div className="intro-content">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, ...props }) => (
                <div className="intro-image-container">
                  <img {...props} className="intro-image" />
                </div>
              ),
            }}
          >
            {description}
          </Markdown>
        </div>
      </div>
    );
  }

  // Otherwise render as card with modal
  return (
    <>
      <div className="col-md-6 mb-4">
        <Card onClick={() => setShowModal(true)} className="h-100 cursor-pointer">
          <Card.Body className="d-flex flex-column">
            <h2 className="text-primary">{name}</h2>
            <Card.Text as="div" className="description-container flex-grow-1">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ node, ...props }) => (
                    <div className="image-container">
                      <img {...props} className="markdown-img" />
                    </div>
                  ),
                }}
              >
                {preview}
              </Markdown>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered dialogClassName="modal-90w" className="local-implementation-modal">
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, ...props }) => (
                <div className="modal-image-container">
                  <img {...props} className="modal-markdown-img" />
                </div>
              ),
            }}
          >
            {description}
          </Markdown>
        </Modal.Body>
      </Modal>
    </>
  );
};

const LocalImplementationProjects = () => {
  return (
    <div className="component LocalImplementationProjects content-page py-5">
      <div className="container">
        <h1>Local Implementation Projects</h1>
        <div className="row">
          <CMSComponent
            tableName="Local Implementation Projects"
            keyField="name"
            fieldMapping={{
              name: "Name",
              order: "Order",
              preview: "Preview",
              description: "Description",
            }}
            sortBy={(a, b) => a.order - b.order}
            recordComponent={LocalImplementationProject}
          />
        </div>
      </div>
    </div>
  );
};

export default LocalImplementationProjects;
