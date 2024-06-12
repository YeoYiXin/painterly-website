from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import cv2
import numpy as np
import filter.cartoon.cartoon as cartoon
import filter.watercolour.watercolour as watercolour
import filter.impressionism.impressionism as impressionism
from filter.impressionism.gradient import gradient

app = Flask(__name__)
CORS(app)

@app.route('/filter', methods=['POST'])
def apply_filter():
    try:
        data = request.get_json()
        image_data = data.get("image_data")
        filter_name = data.get("filter_name")
        print(filter_name)
        print(image_data)


        if not image_data:
            return jsonify({'error': 'Image data not provided in request.'}), 400

        if ',' in image_data:
            image_data = image_data.split(",")[1]
        else:
            return jsonify({'error': 'Invalid image data format.'}), 400

        # Decode the base64 image data
        image_bytes = base64.b64decode(image_data)  # convert back to its binary form
        image_np = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
        grey = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # Process the image using the specified filter
        if filter_name == "cartoon":
            cartoon_image = cartoon.filter1(image, grey)
            _, cartoon_encoded = cv2.imencode(".png", cartoon_image)
            cartoon_data = base64.b64encode(cartoon_encoded).decode("utf-8")
            print(cartoon_data)
            return jsonify({'filteredUrl': f"data:image/png;base64,{cartoon_data}"}), 200

        elif filter_name == "watercolour":
            watercolour_image = watercolour.filter3(image, grey)
            _, watercolour_encoded = cv2.imencode(".png", watercolour_image)
            watercolour_data = base64.b64encode(watercolour_encoded).decode("utf-8")
            print(watercolour_data)
            return jsonify({'filteredUrl': f"data:image/png;base64,{watercolour_data}"}), 200

        elif filter_name == "impressionism":
            gradient_image = gradient.from_gradient(grey)
            impressionism_image = impressionism.filter(gradient_image, image, grey)
            _, impressionism_encoded = cv2.imencode(".png", impressionism_image)
            impressionism_data = base64.b64encode(impressionism_encoded).decode("utf-8")
            print(impressionism_data)
            return jsonify({'filteredUrl': f"data:image/png;base64,{impressionism_data}"}), 200

        else:
            return jsonify({'error': 'Invalid filter name.'}), 400

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
