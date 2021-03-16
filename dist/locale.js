'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shutterstock;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Override of cloudinary strings
var ptBrTranslations = {
	or: 'Ou',
	back: 'Voltar',
	advanced: 'Avançado',
	close: 'Fechar',
	no_results: 'Nenhum resultado',
	search_placeholder: 'Buscar arquivos',
	about_uw: 'Sobre o Widget de Upload',
	menu: {
		files: 'Meus Arquivos',
		web: 'Endereços Web',
		camera: 'Câmera',
		gsearch: 'Buscar Imagens',
		gdrive: 'Google Drive',
		dropbox: 'Dropbox',
		facebook: 'Facebook',
		instagram: 'Instagram',
		shutterstock: 'Shutterstock'
	},
	selection_counter: {
		selected: 'Selecionado'
	},
	actions: {
		upload: 'Upload',
		clear_all: 'Limpar todos',
		log_out: 'Deslogar'
	},
	notifications: {
		general_error: 'Um erro ocorreu.',
		general_prompt: 'Você tem certeza?',
		limit_reached: 'Não é possível selecionar mais arquivos.',
		invalid_add_url: 'A URL deve ser válida.', //The URL must be valid.',
		invalid_public_id: 'O ID público não pode conter \\,?,&,#,%,<,>.', //Public ID cannot contain \\,?,&,#,%,<,>.',
		no_new_files: 'Os arquivos já foram carregados.', //The files have already been uploaded.',
		image_purchased: 'Imagem Comprada',
		video_purchased: 'Vídeo Comprado',
		purchase_failed: 'A compra falhou. Por favor, tente novamente.',
		service_logged_out: 'Serviço desconectado devido a um erro.',
		great: 'Ótimo'
	},
	advanced_options: {
		public_id_ph: 'ID Público',
		tags_ph: 'Add uma tag',
		add_new: 'Add uma nova tag:',
		upload_preset_placeholder: 'Fazer Upload de Preset'
	},
	landscape_overlay: {
		title: 'Modo paisagem não é suportado',
		description: 'Gire seu dispositivo de volta ao modo retrato para continuar.'
	},
	queue: {
		title: 'Fila de Upload',
		title_uploading_with_counter: 'Enviando {{num}} Arquivos',
		title_uploading: 'Enviando Arquivos',
		mini_title: 'Enviado',
		mini_title_uploading: 'Enviando',
		show_completed: 'Mostrar completos',
		retry_failed: 'Tentar novamente os que falharam',
		abort_all: 'Cancelar tudo',
		upload_more: 'Carregar mais',
		done: 'Feito',
		mini_upload_count: '{{num}} enviados',
		mini_failed: '{{num}} falharam',
		statuses: {
			uploading: 'Enviando...',
			error: 'Erro',
			uploaded: 'Feito',
			aborted: 'Cancelado'
		}
	},
	uploader: {
		filesize: {
			na: 'N/A',
			b: '{{size}} Bytes',
			k: '{{size}} KB',
			m: '{{size}} MB',
			g: '{{size}} GB',
			t: '{{size}} TB'
		},
		errors: {
			file_too_large: 'O tamanho do arquivo ({{size}}) ultrapassa o máximo permitido ({{allowed}})',
			max_dimensions_validation: 'As dimensões da imagem ({{width}}X{{height}}) são maiores que o máximo permitido: ({{maxWidth}}X{{maxHeight}})',
			min_dimensions_validation: 'As dimensões da imagem ({{width}}X{{height}})  são menores que o mínimo requerido: ({{minWidth}}X{{minHeight}})',
			unavailable: 'NA',
			max_number_of_files: 'Número máximo de arquivos excedido',
			allowed_formats: 'Formato do Arquivo não permitido',
			max_file_size: 'Arquivo muito grande',
			min_file_size: 'Arquivo muito pequeno'
		}
	},
	crop: {
		title: 'Cortar',
		crop_btn: 'Cortar',
		skip_btn: 'Pular',
		reset_btn: 'Resetar',
		close_btn: 'Sim',
		close_prompt: 'Fechar vai cancelar todos os carregamentos, Você tem certeza?',
		image_error: 'Erro ao carregar imagem',
		corner_tooltip: 'Arraste os cantos para redimensionar',
		handle_tooltip: 'Arraste a alça para redimensionar'
	},
	camera: {
		capture: 'Capturar',
		cancel: 'Cancelar',
		take_pic: 'Tirar uma foto e enviar',
		explanation: 'Tenha certeza que sua câmera está conectada e que seu navegador permite a captura por câmera. Quando estiver pronto, clique em Capturar',
		camera_error: 'Falha para acessar a câmera',
		retry: 'Tentar Novamente a Câmera',
		file_name: 'Camera_{{time}}'
	},
	dropbox: {
		no_auth_title: 'Carregue arquivos da sua conta do Dropbox.',
		no_auth_action: 'Conectar ao Dropbox',
		no_photos: 'Nenhuma Foto',
		no_files: 'Nenhum Arquivo',
		root_crumb: 'Root',
		list_headers: {
			select: 'Selecionado',
			name: 'Nome',
			modified: 'Modificado'
		},
		menu: {
			browse: 'Buscar',
			recent: 'Recente'
		},
		authenticating: 'Autenticando...'
	},
	facebook: {
		no_photos: 'Nenhuma foto...',
		no_auth_title: 'Carregue arquivos da sua conta do Facebook.',
		no_auth_action: 'Conectar ao Facebook',
		no_auth_statement: 'Nós não postaremos nada sem a sua permissão.',
		album_subtitle: '{{count}} fotos',
		menu: {
			uploaded: 'Suas Fotos',
			tagged: 'Fotos de Você',
			albums: 'Álbuns'
		}
	},
	google_drive: {
		no_auth_title: 'Carregue arquivos do seu Google Drive.',
		no_auth_action: 'Conectar ao Google Drive',
		search: {
			placeholder: 'Buscar...',
			reset: 'Limpar busca'
		},
		grid: {
			folders: 'Pastas',
			files: 'Arquivos',
			empty_folder: 'Esta pasta está vazia.'
		},
		recent: 'Recentes',
		starred: 'Com estrela',
		my_drive: 'Meu Drive',
		shared_drive: 'Drives compartilhados',
		search_results: 'Resultados da busca',
		shared_with_me: 'Compartilhados comigo',
		name: 'Nome',
		modifiedTime: 'Última modificação',
		modifiedByMeTime: 'Última modificação por mim',
		viewedByMeTime: 'Última vez aberto por mim',
		notifications: {
			retrieve_failed: 'Falha ao recuperar dados de upload do Google Drive.'
		}
	},
	image_search: {
		main_title: 'Buscar Imagem',
		inputPlaceholder: 'Buscar por imagens',
		customPlaceholder: 'Buscar {{site}}',
		show_options: 'Mostrar Opções',
		hide_options: 'Esconder Opções',
		filters_title: 'Site',
		all: 'todos',
		rights: 'Direitos de uso:',
		rights_options: {
			not_filtered: 'não filtrados por licença',
			free: 'gratuito para usar ou compartilhar',
			free_com: 'gratuito para usar ou compartilhar, até mesmo comercialmente',
			free_mod: 'gratuito para usar, compartilhar ou modificar',
			free_mod_com: 'gratuito para usar, compartilhar ou modifica, até mesmo comercialmente'
		},
		search_error: 'A busca falhou, por favor tente novamente.'
	},
	instagram: {
		no_auth_title: 'Carregue fotos da sua conta do Instagram.',
		no_auth_action: 'Conectar ao Instagram',
		header_title: 'Suas Fotos Recentes do Instagram',
		authenticating: 'Autenticando...'
	},
	local: {
		browse: 'Buscar',
		dd_title_single: 'Arraste e Solte um arquivo aqui',
		dd_title_multi: 'Arraste e Solte arquivos aqui',
		drop_title_single: 'Arraste um arquivo para fazer upload',
		drop_title_multiple: 'Arraste arquivos para fazer upload'
	},
	shutterstock: (_shutterstock = {
		no_auth_title: 'Carregue arquivos da sua conta do Shutterstock.',
		toggle_filters_button: 'Filtros',
		no_auth_action: 'Conectar ao Shutterstock',
		authenticating: 'Autenticando...',
		statement: 'Shutterstock oferece a melhor qualidade, imagens livres de royalties, fotos, vetores, ilustrações, vídeos e música para quase todos os aplicativos.',
		reg_link_text: 'Clique aqui para criar uma conta Shutterstock',
		next_btn: 'Próximo'
	}, _defineProperty(_shutterstock, 'next_btn', 'Próximo'), _defineProperty(_shutterstock, 'media_types', {
		images: 'Imagens',
		videos: 'Vídeos'
	}), _defineProperty(_shutterstock, 'filters', {
		more_label: 'Mais',
		sort_options: {
			label: 'Ordenar por',
			newest: 'Novo',
			relevance: 'Relevante',
			popular: 'Popular',
			random: 'Aleatório'
		},
		people: {
			label: 'Pessoas',
			only_images_with_people: 'Somente imagens com pessoas',
			only_videos_with_people: 'Somente vídeos com pessoas'
		},
		gender: {
			label: 'Gênero',
			male: 'Masculino',
			female: 'Feminino',
			both: 'Ambos'
		},
		size: {
			label: 'Tamanho',
			small: 'Pequeno',
			medium: 'Médio',
			large: 'Grande'
		},
		clear: 'limpar',
		orientation: {
			label: 'Orientação',
			horizontal: 'Horizontal',
			vertical: 'Vertical'
		},
		color: 'Cor',
		colors: {
			red: 'vermelho',
			orange: 'laranja',
			amber: 'âmbar',
			yellow: 'amarelo',
			lime: 'lima',
			green: 'verde',
			teal: 'verde-azulado',
			turquoise: 'turquesa',
			aqua: 'aqua',
			azure: 'azure',
			blue: 'azul',
			purple: 'roxo',
			orchid: 'orquídea',
			magenta: 'magenta'
		},
		safe: 'Safe',
		all_categories: 'Todas as Categorias',
		types: {
			all: 'Todos os tipos de imagem',
			illustration: 'Ilustração',
			photo: 'Foto',
			vector: 'Vetor'
		},
		duration: {
			label: 'Duração',
			short: 'Curto',
			short_tip: '< 4 minutod',
			long: 'Longo',
			long_tip: '> 20 minutos'
		},
		resolution: {
			label: 'Resolução',
			standard_definition: 'SD',
			standard_definition_tip: 'Definição Padrão',
			high_definition: 'HD',
			high_definition_tip: 'Alta Definição',
			'4k': '4k',
			'4k_tip': '4k'
		}
	}), _defineProperty(_shutterstock, 'filter_summary', {
		label: 'Filtros: {{- summary}}',
		gender: 'somente {{value}}',
		people: 'com {{value}} pessoas',
		color: 'cor: {{value}}',
		category: 'em {{- value}}',
		unsafe: 'inseguro'
	}), _defineProperty(_shutterstock, 'purchase_page', {
		purchase_btn_label: 'Compra',
		plans: {
			label: 'Selecionar Plano',
			years: 'anos',
			days: 'dias',
			expired: 'expirado',
			exceeded: 'excedido',
			manage_plans: 'Gerenciar seus planos Shutterstock...',
			no_plan: 'Seu plano atual não inclui '
		},
		format_and_size: {
			label: 'Selecione o formato e o tamanho '
		},
		aspect_ratio: 'Proporção',
		author: 'Autor',
		description: 'Descrição',
		button_label: {
			purchase: 'Comprar',
			acquire: 'Comprar',
			next: 'Próximo',
			upload: 'Upload',
			purchasing: 'Comprando...',
			downloading: 'Baixando...'
		},
		button_description: {
			next: 'Você já possui este {{assetType}} Clique em Avançar para continuar',
			upload: 'Você já possui este {{assetType}} Clique em Upload para continuar',
			purchasing: 'Comprando - Isso pode levar alguns segundos...',
			downloading: 'Baixando - Isso pode levar alguns segundos...'
		},
		duration: 'Duração',
		fps: 'FPS',
		sizes: {
			vector_eps: 'Vetor',
			small_jpg: 'Pequeno',
			medium_jpg: 'Médio',
			huge_jpg: 'Grande',
			web: 'Web',
			sd: 'SD',
			hd: 'HD',
			'4k': '4K'
		},
		file_limit_exceeded: 'Algumas opções excederam o limite de tamanho de arquivo para upload.',
		time_left: '{{time}} restante'
	}), _defineProperty(_shutterstock, 'purchase_preview', {
		loading_preview: 'Carregando pré-visualização',
		open_in_new_window: 'Abrir em uma nova janela'
	}), _defineProperty(_shutterstock, 'dictionary', {
		image: 'imagem',
		video: 'vídeo'
	}), _defineProperty(_shutterstock, 'home_page', {
		results_header: 'Popular',
		categories_header: 'Categorias'
	}), _defineProperty(_shutterstock, 'search', {
		placeholder: 'Busca...',
		reset: 'Limpar busca'
	}), _shutterstock),
	url: {
		inner_title: 'URL pública do arquivo para upload:',
		input_placeholder: 'http://remote.site.example/images/remote-image.jpg'
	},
	metadataPage: {
		title: 'Valores de metadados estruturados',
		subtitle: '1 arquivo selecionado',
		subtitle_plural: '{{count}} arquivos selecionados',
		tooltip: 'Alguns campos de metadados obrigatórios não estão definidos ou os valores fornecidos são inválidos.',
		upload: 'Upload',
		conflict_label: 'Substituir',
		intro: {
			openingText: 'Você pode preencher os seguintes campos para adicionar novos metadados aos seus arquivos no upload.',
			conflictWarning: "Nota: Selecione 'Substituir' para os campos onde deseja aplicar os novos valores aos arquivos novos e substituídos.",
			closingText: 'Após o upload, você pode modificar metadados para ativos individuais da Biblioteca de Mídia'
		},
		closePrompt: 'Tem certeza que deseja fechar esta caixa de diálogo? Seus arquivos não serão enviados.',
		backPrompt: 'Tem certeza? Sua seleção de arquivo e os valores de metadados inseridos serão perdidos.',
		approveCancel: 'Sim',
		cancel: 'Cancelar',
		validationErrors: {
			string: {
				min: 'Deve ter ao menos {{min}} caracteres.',
				max: 'Não deve ter mais que {{max}} caracteres.',
				minAndMax: 'Deve ter entre {{min}}-{{max}} caracteres.',
				regex: 'Deve incluir somente XXXX.'
			},
			integer: {
				lessThan: 'Deve ser menos que {{less}}.',
				lessThanEqual: 'Não deve ser mais que {{max}}.',
				greaterThan: 'Deve ser mais que {{more}}.',
				greaterThanEqual: 'Deve ser no mínimo {{min}}.'
			},
			number: {
				lessThan: 'Deve ser menos que {{less}}.',
				lessThanEqual: 'Não deve ser mais que {{max}}.',
				greaterThan: 'Deve ser mais que {{more}}.',
				greaterThanEqual: 'Deve ser no mínimo {{min}}.'
			},
			enum: {
				oneOf: '{{originalValue}} deve ser uma das opções especificadas acima.'
			},
			set: {
				oneOf: '{{originalValue}} deve ser uma das opções especificadas acima.'
			},
			date: {
				lessThan: 'Deve ser antes de {{max}}.',
				lessThanEqual: 'Não deve ser depois de {{max}}.',
				greaterThan: 'Deve ser depois de {{min}}.',
				greaterThanEqual: 'Não deve ser antes de {{min}}.'
			},
			stringError: 'Deve ser texto.',
			numberError: 'Deve ser um número.',
			integerError: 'Deve ser um número.',
			dateError: 'Deve ser uma data.',
			enumError: 'Escolha uma das opções especificadas.',
			setError: 'Escolha pelo menos uma das opções especificadas.',
			required: 'Este campo é obrigatório.',
			integerTypeError: 'Este é um campo inteiro.',
			digitsLimitError: 'Este número não pode ter mais de 16 dígitos. ',
			unsupportedFields: 'Por favor, entre em contato com seu administrador, há um problema com os seguintes campos de metadados opcionais: ',
			unsupportedRequiredFields: 'Por favor, entre em contato com seu administrador, há um problema com os seguintes campos de metadados obrigatórios: '
		}
	}
};

var locale = exports.locale = {
	'ptbr': ptBrTranslations
};
//# sourceMappingURL=locale.js.map