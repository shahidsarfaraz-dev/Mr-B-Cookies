$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Faq 
  $('.faq-header').on('click', function () {
    const $category = $(this).closest('.faq-category');
    const $content = $category.find('.faq-content');
    $('.faq-category').not($category).removeClass('active');
    $('.faq-content').not($content).removeClass('active');
    $category.toggleClass('active');
    $content.toggleClass('active');
  });
  $('.faq-item').on('click', function (e) {
    e.stopPropagation();
    const $item = $(this);
    const $answer = $item.find('.faq-answer');
    $item.siblings().removeClass('open').find('.faq-answer').removeClass('active');
    $item.toggleClass('open');
    $answer.toggleClass('active');
  });
  $('.faq-category:first').addClass('active').find('.faq-content').addClass('active');

  // Pre Order
  // Default prices per box
  const originalPricePerBox = 22.00;
  const discountedPricePerBox = 17.99;

  function updatePrices(quantity) {
    const totalOriginal = (originalPricePerBox * quantity).toFixed(2);
    const totalDiscounted = (discountedPricePerBox * quantity).toFixed(2);

    $('#original-total').text(totalOriginal);
    $('#discounted-total').text(totalDiscounted);
  }

  $('.qty-btn').on('click', function () {
    const $input = $(this).siblings('.qty-input');
    let currentValue = parseInt($input.val());

    if ($(this).data('action') === 'increase') {
      currentValue += 1;
    } else if ($(this).data('action') === 'decrease' && currentValue > 1) {
      currentValue -= 1;
    }

    // Format to always show 2 digits (e.g., "01", "02")
    $input.val(currentValue.toString().padStart(2, '0'));

    // Update prices
    updatePrices(currentValue);
  });
});

